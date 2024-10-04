import React from 'react'
import Link from 'next/link'
import { Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import FootprintIcon from "./icons/Footprint"
import { useTranslation } from "next-i18next"

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

const Logo = React.memo(() => {
  const { t } = useTranslation('common')
  const name = t('name')
  const theme = useTheme()

  return (
    <Link href='/' scroll={false} aria-label={`${name} homepage`}>
      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily={theme.fonts.heading}
          fontWeight="bold"
          fontSize="20px"
          ml={3}
        >
          {name}
        </Text>
      </LogoBox>
    </Link>
  )
})

Logo.displayName = 'Logo'

export default Logo

