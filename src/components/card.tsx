import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    py='8'
    px={{ base: '4', md: '10' }}
    shadow='0px 0px 10px 1px rgba(0, 0, 0, .2)'
    rounded={{ sm: 'xl', md: '2xl' }}
    {...props}
  />
)