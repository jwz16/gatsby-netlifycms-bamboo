import { VStack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import { BlogCard } from '../components/blog_card';

const BlogsPage = (props: { data: Queries.Query }) => {
  const data = props.data;
  return (
    <>
    <VStack spacing={20} alignItems={'stretch'} px={10}>
      {
        data.allMdx.nodes.filter(node => node.slug!.indexOf("blog/") == 0).map(node => (
          node.frontmatter == null ? (<></>)
          :
          (<BlogCard
            key={node.frontmatter.title}
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

export default BlogsPage;

export const pageQuery = graphql`
  query BlogsPageQuery {
    allMdx {
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

        slug
        excerpt(pruneLength: 300)
      }
    }
  }
`