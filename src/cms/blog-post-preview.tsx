import React from 'react'
import BlogPost from '../templates/blog-post'
import { PreviewTemplateComponentProps } from 'netlify-cms-core'

const BlogPostPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.get('data');
  return (
    <BlogPost
      data={data}
    />
  )
}

export default BlogPostPreview