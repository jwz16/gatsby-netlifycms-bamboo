import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './logo'
import { Link } from 'gatsby'

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="section" pb={{ base: '5', md: '10' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <HStack px={10} py={5} spacing="10" justify="space-between" >
          <Logo />
          <Spacer/>
          {isDesktop ? (
            <Flex justify="space-between">
              <ButtonGroup variant="link" spacing="8">
                {['Blogs', 'Arts', 'Category', 'About', 'Contact'].map((item) => (
                  <Button as={Link} key={item} to='/blogs' >{item}</Button>
                ))}
              </ButtonGroup>
            </Flex>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Box>
    </Box>
  )
}

export default NavBar;