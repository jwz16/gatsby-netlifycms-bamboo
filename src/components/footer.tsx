import { VStack, Text, Divider } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack h={100} w='100%' mt='50'>
      <Divider mb='5' />
      <Text >© {new Date().getFullYear()} BAMBLOG</Text>
    </VStack>
  )
}

export default Footer;