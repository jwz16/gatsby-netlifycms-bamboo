import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'
import { Logo } from './logo'
import { Link } from 'gatsby'

const links = [
  {'name': 'Blog', 'to': '/blog'},
  {'name': 'About', 'to': '/about'},
  {'name': 'Contact', 'to': '/contact'}
]

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="section" pb={{ base: '5', md: '10' }} position='sticky' top={0} zIndex={999}>
      <Box
        as="nav"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        bg={useColorModeValue('whiteAlpha.100', 'grayAlpha.100')}
        backdropFilter='blur(10px)'
      >
        <HStack px={10} py={5} spacing="10" justify="space-between" >
          <Link to='/'> <Logo/> </Link>
          <Spacer/>
          {isDesktop ? (
            <Flex justify="space-between">
              <ButtonGroup variant="link" spacing="8">
                {
                  links.map((item) => (
                    <Button as={Link} key={item.name} to={item.to} >{item.name}</Button>
                  ))
                }

                <IconButton
                  variant='ghost'
                  icon={ colorMode == 'light' ? <FiSun fontSize="1.25rem"/> : <FiMoon fontSize="1.25rem"/>}
                  onClick={toggleColorMode}
                  aria-label="Toggle Theme"
                />
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