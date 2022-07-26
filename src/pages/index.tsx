import { VStack, Heading } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const IndexPage = () => {
  return (
    <VStack padding={10} >
      <title>Home Page</title>

      <StaticImage
        src='../images/hehua-bamboo.jpg'
        alt='He Hua'
        placeholder='blurred'
        layout='fixed'
      />

    <Heading>Bamboo Blog</Heading>

    </VStack>
  )
}

export default IndexPage
