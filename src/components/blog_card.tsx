import { Button, Heading, HStack, Text } from '@chakra-ui/react';
import * as React from 'react'
import { Card } from './card'

export const BlogCard = ({title, excerpt, datetime}: {title: string, excerpt: string, datetime: string}) => (
  <Card>
    <Heading as='h3' size='lg'>{title}</Heading>
    <Text fontSize='xl'>{excerpt}</Text>
    <HStack>
      <Text>{new Date(datetime).toLocaleString()}</Text>
      <Button>Read more</Button>
    </HStack>
  </Card>
)