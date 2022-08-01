import { GatsbyNode } from 'gatsby';
import { createRemoteFileNode, createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

// export const createPages : GatsbyNode['createPages'] = async ({ actions: {createPage}, graphql }) => {
//   // Query for markdown nodes to use in creating pages.
//   const result: {errors?: any, data?: Queries.Query} = await graphql(
//     `
//       {
//         allMdx(limit: 1000) {
//           nodes {
//             id
//             slug
//           }
//         }
//       }
//     `
//   );
  
//   // Handle errors
//   if (result.errors) {
//     console.error(`Error while running GraphQL query.`)
//     return
//   }
//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
//   result.data?.['allMdx'].nodes.forEach((node: Queries.Mdx) => {
//     const path = node.slug!;
//     createPage({
//       path,
//       component: blogPostTemplate,
//       // In your blog post template's graphql query, you can use pagePath
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }

export const onCreateNode : GatsbyNode<Queries.Mdx>['onCreateNode'] = async ({ node, createNodeId, getNode, actions: { createNodeField, createNode }, cache}) => {
  // TODO: Need further debugging, current implementation still can't let GatsbyImage to load remote image by URL
  if (node.internal.type === 'Mdx' &&
      node.frontmatter &&
      node.frontmatter.featuredimage) {
    const featureimage = node.frontmatter.featuredimage;
    if (isRemoteFile(featureimage as unknown as string)) {
      try {
        const remoteFileNode = await createRemoteFileNode({
          url: featureimage as unknown as string,
          parentNodeId: node.id,
          cache: cache,
          createNode: createNode,
          createNodeId: createNodeId
        });

        if (remoteFileNode != null) {
          createNodeField({
            node,
            name: 'featuredimage',
            value: remoteFileNode.id
          });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      createNodeField({
        node,
        name: 'featuredimage',
        value: featureimage,
      });
    }
  }

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

const isRemoteFile = (filename: string) => {
  if (filename == undefined || filename == null)
    return false;
  
  const tokens = ['http://', 'https://']
  const tokenMatched = tokens.some((token) => {
    return filename.indexOf(token) == 0;
  });

  return tokenMatched;
}