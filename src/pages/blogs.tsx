import { VStack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { BlogCard } from '../components/blog_card';

const BlogsPage = (props: { data: Queries.Query }) => {
  const data = props.data;
  return (
    <>
    <VStack spacing={20} alignItems={'stretch'} px={40}>
      {
        data.allMdx.nodes.map(node => (
          node.frontmatter == null ? (<></>)
          :
          (<BlogCard
            key={node.frontmatter.title}
            title={node.frontmatter.title || ''}
            featuredimage={node.frontmatter.featuredimage || ''}
            excerpt={node.excerpt}
            datetime={node.frontmatter.date as string}
          />)
        ))
      }
    </VStack>
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
          featuredimage {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
        }
        excerpt(pruneLength: 500)
      }
    }
  }
`