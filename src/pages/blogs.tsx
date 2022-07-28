import { Flex, Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { BlogCard } from '../components/blog_card';

const BlogsPage = (props: { data: Queries.Query }) => {
  const data = props.data;
  return (
    <>
    <Flex>
      {
        data.allMdx.nodes.map(node => (
          node.frontmatter == null ? (<></>)
          :
          (<BlogCard
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            datetime={node.frontmatter.date as string}
          />)
        ))
      }
    </Flex>
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
          date
        }
        excerpt
      }
    }
  }
`