import Link from 'next/link'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import FootprintIcon from "./icons/Footprint";
import {useTranslation} from "next-i18next";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    > svg {
        transition: 200ms ease;
    }
    
    &:hover svg {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const {t} = useTranslation('common');
    return (
        <Link href='/' scroll={false}>
            <LogoBox>
                <FootprintIcon />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c, sans-serif'
                    fontWeight="bold"
                    fontSize="20px"
                    ml={3}
                    fontSize={20}
                >
                    {t('name')}
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo


