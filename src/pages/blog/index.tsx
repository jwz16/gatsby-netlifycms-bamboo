import { VStack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { BlogCard } from '../../components/blog-card';

const BlogIndexPage = (props: { data: Queries.Query }) => {
  const data = props.data;
  return (
    <>
    <VStack spacing={20} alignItems={'stretch'} px={10}>
      {
        data.allMdx.nodes.map(node => (
          node.frontmatter == null ? (<></>)
          :
          (<BlogCard
            key={node.id}
            title={node.frontmatter.title || ''}
            slug={node.slug!}
            featuredimage={node.frontmatter.featuredimage}
            excerpt={node.excerpt}
            datetime={node.frontmatter.date as string}
          />)
        ))
      }
    </VStack>
    </>
  )
}

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexPageQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          featuredimage {
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 300
                layout: FIXED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: {fit: COVER, cropFocus: ATTENTION}
              )
            }
          }
          date
        }

        id
        slug
        excerpt(pruneLength: 300)
      }
    }
  }
`