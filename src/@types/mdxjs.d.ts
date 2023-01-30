declare module "@mdx-js/react" {
  import React from "react";
  import { Components } from 'react-markdown';
  type MDXProps = {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}