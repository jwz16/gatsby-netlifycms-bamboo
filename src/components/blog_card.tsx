import { Button, Heading, HStack, VStack, Image, Text, Spacer } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import { Card } from './card'

export const BlogCard = ({title, featuredimage, excerpt, datetime}: {title: string, featuredimage: string, excerpt: string, datetime: string}) => (
  <Card px={0} py={0} overflow='hidden'>
    <HStack spacing={10} alignItems='stretch' height={300}>
      <Image width={300} src={featuredimage} alt={title} fit='cover'/>
      {/* <StaticImage
          src={featuredimage}
          alt='featuerd image'
          placeholder='blurred'
          layout='fixed'
        /> */}
      <VStack alignItems='flex-start' justifyContent='flex-start' py={5} paddingRight={10} width='100%'>
        <HStack justifyContent='space-between' width='100%'>
          <Heading as='h3' size='lg'>{title}</Heading>
          <Text>{new Date(datetime).toLocaleString()}</Text>
        </HStack>

        <Text fontSize='xl'>{excerpt}</Text>
        <Button>READ MORE</Button>
      </VStack>
    </HStack>
  </Card>
)