import React from 'react'
import NavBar from '../components/navbar'
import { Box, Flex } from '@chakra-ui/react'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Box>
      <NavBar/>
      <Flex as='main' padding={10} flexDirection='column'>
        {props.children}
      </Flex>
    </Box>
  )
}