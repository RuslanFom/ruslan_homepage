import Logo from './Logo'
import NextLink from 'next/link'
import {forwardRef} from 'react'
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
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './Theme-toggle-button'
import {IoLogoGithub} from "react-icons/io5";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "next-i18next";

const LinkItem = ({href, path, target, children, ...props}) => {
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
// eslint-disable-next-line react/display-name
const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = ({ path }) => {
    const {t} = useTranslation('common');
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
                    <Heading as="h1"
                             size="lg"
                             letterSpacing={'tighter'}
                    >
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/works" path={path}>
                        {t('nav.works')}
                    </LinkItem>
                    <LinkItem href="/skills" path={path}>
                        {t('nav.skills')}
                    </LinkItem>
                    <LinkItem href="/contacts" path={path}>
                        {t('nav.contacts')}
                    </LinkItem>
                    <LinkItem href="/examples" path={path}>
                        {t('nav.code')}
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/RuslanFom/ruslan_homepage"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        pl={2}
                        style={{ gap: '4px' }}
                    >
                        <IoLogoGithub/>
                        {t('nav.source')}
                    </LinkItem>
                </Stack>


                <LanguageSwitcher />

                <Box flex={1} pl={1}>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon/>}
                                variant="outline"
                                aria-label="Options"/>
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">{t('about')}</MenuItem>
                                <MenuItem as={MenuLink} href="/works">{t('nav.works')}</MenuItem>
                                <MenuItem as={MenuLink} href="/examples">{t('nav.code')}</MenuItem>
                                <MenuItem as={MenuLink} href="/skills">{t('nav.skills')}</MenuItem>
                                <MenuItem as={MenuLink} href="/contacts">{t('nav.contacts')}</MenuItem>
                                <MenuItem as={Link} href="https://github.com/RuslanFom">
                                    {t('nav.source')}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
export { getServerSideProps } from './../pages/index';
