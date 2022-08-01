import { Heading, Text, Image, Code, Tag } from "@chakra-ui/react"
import { chakra } from '@chakra-ui/system';
import Highlight, {defaultProps, Language} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import React from "react"

const MdxStyles = () => {
  const styles = {
    h1: (props: Record<string, unknown>) => <Heading as="h1" paddingY="5" size="2xl" {...props} />,
    h2: (props: Record<string, unknown>) => <Heading as="h2" paddingY="5" size="xl" {...props} />,
    h3: (props: Record<string, unknown>) => <Heading as="h3" paddingY="5" size="lg" {...props} />,
    h4: (props: Record<string, unknown>) => <Heading as="h4" paddingY="5" size="md" {...props} />,
    h5: (props: Record<string, unknown>) => <Heading as="h5" paddingY="5" size="sm" {...props} />,
    h6: (props: Record<string, unknown>) => <Heading as="h6" paddingY="5" size="xs" {...props} />,
    p: (props: Record<string, unknown>) => <Text lineHeight={2} paddingBottom="4" fontSize="lg" {...props} />,
    img: (props: Record<string, unknown>) => <Image marginBottom="4" {...props} />,
    pre: (props: Record<string, unknown>) => <CodeBlock {...props}/>,
    blockquote: (props: Record<string, unknown>) => <Code p="2" {...props} />
  };

  return styles;
}

export default MdxStyles;

const CodeBlock = (props: Record<string, unknown>) => {
  const childrenProps = (props.children as Record<string, unknown>).props as Record<string, string>
  const className = childrenProps.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang: '';
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={childrenProps.children.trim()}
      language={language as Language}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <chakra.pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <chakra.div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <chakra.span key={key} {...getTokenProps({token, key})} />
              ))}
            </chakra.div>
          ))}
        </chakra.pre>
      )}
    </Highlight>
    // <Code whiteSpace='break-spaces' display='block' w='full' p='2' {...props} />
  )
}