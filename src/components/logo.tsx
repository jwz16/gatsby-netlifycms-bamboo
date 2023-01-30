import { Image, ImageProps } from '@chakra-ui/react'
import * as React from 'react'
import logo from '../images/logo-bamblog.svg'

export const Logo = (props: ImageProps) => (
  <Image
    src={logo}
    alt='logo'
    fit='contain'
    w={{base: '300px', md: '320px'}}
    transitionDuration='300ms' {...props}
    userSelect='none'
  />
)