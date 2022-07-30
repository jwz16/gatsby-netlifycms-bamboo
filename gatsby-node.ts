// import { GatsbyNode } from 'gatsby';
// import { createRemoteFileNode } from 'gatsby-source-filesystem';

// export const onCreateNode : GatsbyNode<Queries.Mdx>['onCreateNode'] = async ({ node, createNodeId, actions: { createNodeField, createNode }, cache}) => {
//   if (node.internal.type === 'Mdx' &&
//       node.frontmatter &&
//       node.frontmatter.featuredimage) {
//     const featureimage = node.frontmatter.featuredimage;
//     if (isRemoteFile(featureimage as unknown as string)) {
//       try {
//         const remoteFileNode = await createRemoteFileNode({
//           url: featureimage as unknown as string,
//           parentNodeId: node.id,
//           cache: cache,
//           createNode: createNode,
//           createNodeId: createNodeId
//         });

//         if (remoteFileNode != null) {
//           createNodeField({
//             node,
//             name: 'featuredimage',
//             value: remoteFileNode.id
//           });

//           node.frontmatter.featuredimage = remoteFileNode.relativePath
//           console.log("###", node.frontmatter.featuredimage)
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
// };

// const isRemoteFile = (filename: string) => {
//   if (filename == undefined || filename == null)
//     return false;
  
//   const tokens = ['http://', 'https://']
//   const tokenMatched = tokens.some((token) => {
//     return filename.indexOf(token) == 0;
//   });

//   return tokenMatched;
// }