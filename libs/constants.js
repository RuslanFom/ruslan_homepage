import process from 'eslint-config-next'

export const G_TAG = {
  development: "dev-mode",
  production: "G-316GGV27V6",
}[process.env.NODE_ENV]