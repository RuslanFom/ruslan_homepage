import { useMemo } from 'react'
import Logo from './Logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './Theme-toggle-button'
import { IoLogoGithub } from "react-icons/io5"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslation } from "next-i18next"
import React from "react"

const LinkItem = ({ href, path, target, children, ...props }) => {
    const isActive = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={isActive ? 'grassTeal' : undefined}
        color={isActive ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
          {children}
      </Link>
    )
}

const MenuLink = React.forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
MenuLink.displayName = 'MenuLink'

const Navbar = ({ path }) => {
    const { t } = useTranslation('common')

    const menuItems = useMemo(() => [
        { href: "/works", label: t('nav.works') },
        { href: "/skills", label: t('nav.skills') },
        { href: "/contacts", label: t('nav.contacts') },
        { href: "/examples", label: t('nav.code') },
        { href: "https://github.com/RuslanFom/ruslan_homepage", label: t('nav.source'), isExternal: true }
    ], [t])

    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        backdropFilter="blur(10px)"
        zIndex={2}
      >
          <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
          >
              <Flex align="center" mr={5}>
                  <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                      <Logo />
                  </Heading>
              </Flex>

              <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems='center'
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
              >
                  {menuItems.map((item) => (
                    <LinkItem
                      key={item.href}
                      href={item.href}
                      path={path}
                      target={item.isExternal ? "_blank" : undefined}
                      display={item.isExternal ? "inline-flex" : undefined}
                      alignItems={item.isExternal ? "center" : undefined}
                      style={{ gap: item.isExternal ? '4px' : undefined }}
                    >
                        {item.isExternal && <IoLogoGithub />}
                        {item.label}
                    </LinkItem>
                  ))}
              </Stack>



              <Flex
                justify="flex-end"
                align="center"
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: 'auto', md: 0 }}
              >
                  <LanguageSwitcher />
                  <Box ml={3}>
                      <ThemeToggleButton />
                  </Box>
                  <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                      <Menu isLazy id="navbar-menu">
                          <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                            size="md"
                          />
                          <MenuList>
                              <MenuItem as={MenuLink} href="/">{t('about')}</MenuItem>
                              {menuItems.map((item) => (
                                <MenuItem
                                  key={item.href}
                                  as={item.isExternal ? Link : MenuLink}
                                  href={item.href}
                                >
                                    {item.label}
                                </MenuItem>
                              ))}
                          </MenuList>
                      </Menu>
                  </Box>
              </Flex>
          </Container>
      </Box>
    )
}

export default Navbar
