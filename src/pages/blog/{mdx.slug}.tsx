import { Heading } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const BlogPost = (props: { data: Queries.Query }) => {
  return (
    <>
      <Heading>{props.data.mdx?.frontmatter?.title}</Heading>
      <MDXRenderer>{props.data.mdx!.body}</MDXRenderer>
    </>
  );
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostById($slug: String){
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      slug
      body
    }
  }
`