import React from 'react'
import NavBar from '../components/navbar'
import { Box, Flex } from '@chakra-ui/react'
import Footer from '../components/footer'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Box px='15%'>
      <NavBar/>
      <Flex as='main' padding={10} flexDirection='column'>
        {props.children}
      </Flex>
      <Footer />
    </Box>
  )
}