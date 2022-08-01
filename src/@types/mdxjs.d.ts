

declare module "@mdx-js/react" {
  import React from "react"
  type MDXProps = {
    children: React.ReactNode
    components: {
      h1?: unknown
      h2?: unknown,
      h3?: unknown,
      h4?: unknown,
      h5?: unknown,
      h6?: unknown,
      p?: unknown,
      img?: unknown,
    }
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}