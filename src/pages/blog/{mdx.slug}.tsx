import { Heading, Text, Image } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

type BlogPostProps = {
  data: Queries.Query
}

const BlogPost = ({data} : BlogPostProps) => {
  const mdxStyles = {
    h1: (props: Record<string, unknown>) => <Heading as="h1" paddingY="5" size="2xl" {...props} />,
    h2: (props: Record<string, unknown>) => <Heading as="h2" paddingY="5" size="xl" {...props} />,
    h3: (props: Record<string, unknown>) => <Heading as="h3" paddingY="5" size="lg" {...props} />,
    h4: (props: Record<string, unknown>) => <Heading as="h4" paddingY="5" size="md" {...props} />,
    h5: (props: Record<string, unknown>) => <Heading as="h5" paddingY="5" size="sm" {...props} />,
    h6: (props: Record<string, unknown>) => <Heading as="h6" paddingY="5" size="xs" {...props} />,
    p: (props: Record<string, unknown>) => <Text lineHeight={2} paddingBottom="4" fontSize="lg" {...props} />,
    img: (props: Record<string, unknown>) => <Image marginBottom="4" {...props} />
  };

  return (
    <>
      <Heading as='h1' size='4xl' noOfLines={1}>
        {data.mdx?.frontmatter?.title}
      </Heading>

      <MDXProvider components={mdxStyles}>
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