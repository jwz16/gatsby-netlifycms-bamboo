import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    py='8'
    px={{ base: '4', md: '10' }}
    shadow='xl'
    rounded={{ sm: 'lg', md: 'xl' }}
    {...props}
  />
)