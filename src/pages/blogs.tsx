import { Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";

const BlogsPage = (props: { data: Queries.Query }) => {
  const data = props.data;
  return (
    <>
    <Heading>All Blogs</Heading>

    <ul>
    {
      data.allMdx.nodes.map(node => (
        <li key={node?.frontmatter?.title}>
          <Heading as='h3' size='lg'>{node?.frontmatter?.title}</Heading>
          <Text fontSize='xl'>
            {node?.excerpt}
          </Text>
        </li>
      ))
    }
    </ul>
    </>
  )
}

export default BlogsPage;

export const pageQuery = graphql`
  query BlogsPageQuery {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
`