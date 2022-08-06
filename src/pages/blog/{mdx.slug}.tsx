import { Heading } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import MdxStyles from "../../components/styles/mdx-style";

type BlogPostProps = {
  data: Queries.Query
}

const BlogPost = ({data} : BlogPostProps) => {
  return (
    <>
      <Heading as='h1' size='4xl' noOfLines={1} pb={10}>
        {data.mdx?.frontmatter?.title}
      </Heading>

      <MDXProvider components={MdxStyles}>
        <MDXRenderer>{data.mdx!.body}</MDXRenderer>
      </MDXProvider>
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