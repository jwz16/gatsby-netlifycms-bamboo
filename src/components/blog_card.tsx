import { Button, Heading, HStack, VStack, Text, Box } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react'
import { Card } from './card'

export const BlogCard = ({title, featuredimage, excerpt, datetime}: {title: string, featuredimage: Queries.Maybe<Queries.File>, excerpt: string, datetime: string}) => (
  <Card px={0} py={0} overflow='hidden'>
    <HStack spacing={10} alignItems='stretch'>
      <Box width={300} height={300}>
        <GatsbyImage image={getImage(featuredimage?.childImageSharp?.gatsbyImageData!)!} alt='' />
      </Box>

      <VStack alignItems='flex-start' justifyContent='flex-start' py={5} paddingRight={10} width='100%'>
        <HStack justifyContent='space-between' width='100%'>
          <Heading as='h3' size='lg'>{title}</Heading>
          <Text>{new Date(datetime).toLocaleString()}</Text>
        </HStack>

        <Text fontSize='xl'>{excerpt}</Text>
        <Button>CONTINUE READING</Button>
      </VStack>
    </HStack>
  </Card>
)