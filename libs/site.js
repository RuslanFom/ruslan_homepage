/** Canonical site origin (no trailing slash). Override in production via NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = String(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslanfomin.com'
)
  .trim()
  .replace(/\/$/, '')

export const DEFAULT_LOCALE = 'en'

export const LOCALES = ['en', 'de', 'it', 'ru', 'ua']

/** hreflang uses BCP 47; Next locale `ua` → `uk` for Ukrainian. */
export function hrefLangForLocale(locale) {
  return locale === 'ua' ? 'uk' : locale
}

/** BCP 47 for <html lang> */
export function documentLangForLocale(locale) {
  return locale === 'ua' ? 'uk' : locale || DEFAULT_LOCALE
}

export function stripLocaleFromPath(pathname) {
  const p = pathname.split('?')[0].split('#')[0] || '/'
  for (const loc of LOCALES) {
    const prefix = `/${loc}`
    if (p === prefix) return '/'
    if (p.startsWith(`${prefix}/`)) {
      const rest = p.slice(prefix.length)
      return rest || '/'
    }
  }
  return p
}

export function pathWithLocale(basePath, locale, defaultLocale = DEFAULT_LOCALE) {
  const normalized =
    basePath === '/' || basePath === '' ? '/' : basePath.startsWith('/') ? basePath : `/${basePath}`
  if (locale === defaultLocale) return normalized
  const suffix = normalized === '/' ? '' : normalized
  return `/${locale}${suffix}`
}

/**
 * Full canonical URL for the current path (includes locale prefix when not default).
 */
export function absoluteUrl(path) {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p}`
}

export function languageAlternateRefs(asPath, defaultLocale = DEFAULT_LOCALE) {
  const base = stripLocaleFromPath(asPath.split('?')[0].split('#')[0] || '/')
  const refs = LOCALES.map((loc) => ({
    href: absoluteUrl(pathWithLocale(base, loc, defaultLocale)),
    hrefLang: hrefLangForLocale(loc),
  }))
  refs.push({
    href: absoluteUrl(pathWithLocale(base, defaultLocale, defaultLocale)),
    hrefLang: 'x-default',
  })
  return refs
}

const OG_LOCALE = {
  en: 'en_US',
  de: 'de_DE',
  it: 'it_IT',
  ru: 'ru_RU',
  ua: 'uk_UA',
}

export function openGraphLocale(locale) {
  return OG_LOCALE[locale] || 'en_US'
}

export function canonicalFromAsPath(asPath) {
  const path = asPath.split('?')[0].split('#')[0] || '/'
  return absoluteUrl(path)
}

export const DEFAULT_OG_IMAGE = '/images/ruslan.jpg'

export const SITE_NAME = 'Ruslan Fomin'

export const DEFAULT_PAGE_TITLE =
  'Ruslan Fomin — Full Stack Developer | Portfolio & Contacts'

export const DEFAULT_DESCRIPTION =
  'Ruslan Fomin: full stack developer. Portfolio, selected projects, skills, and contact information.'
