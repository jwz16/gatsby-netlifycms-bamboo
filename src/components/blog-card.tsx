import { Button, Heading, HStack, VStack, Text, Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react'
import { Card } from './card'

type BlogCardProps = {
  title: string,
  slug: string,
  featuredimage: Queries.Maybe<Queries.File>,
  excerpt: string,
  datetime: string
}


export const BlogCard = ({title, slug, featuredimage, excerpt, datetime}: BlogCardProps) => (
  <Card px={0} py={0} overflow='hidden' transform='translateZ(0)'>
    <HStack spacing={10} alignItems='stretch'>
      <Box width={300} height={300}>
        <GatsbyImage image={getImage(featuredimage!.childImageSharp!.gatsbyImageData!)!} alt='' />
      </Box>

      <VStack alignItems='flex-start' justifyContent='flex-start' py={5} paddingRight={10} width='100%' height={300}>
        <HStack justifyContent='space-between' width='100%'>
          <Heading as='h3' size='lg'>{title}</Heading>
          <Text>{new Date(datetime).toLocaleString()}</Text>
        </HStack>

        <Text fontSize='xl' overflow='hidden'>{excerpt}</Text>
        <Button as={Link} to={`/blog/${slug}`}>CONTINUE READING</Button>
      </VStack>
    </HStack>
  </Card>
)