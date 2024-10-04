import { Box } from '@chakra-ui/react'
import {useTranslation} from "next-i18next";

const Footer = () => {
    const {t} = useTranslation('common');
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} {t('footer')}
        </Box>
    )
}

export default Footer;