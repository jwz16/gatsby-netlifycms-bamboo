import {
  Heading,
  Text,
  Image,
  Code,
  TableContainer,
  Table as TableChakra,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  ListItem,
  UnorderedList,
  OrderedList,
  Divider,
  Link
} from "@chakra-ui/react"
import { chakra } from '@chakra-ui/system';
import Highlight, {defaultProps, Language} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import React from "react"

const MdxStyles = () => {
  const styles = {
    h1: (props: Record<string, unknown>) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props: Record<string, unknown>) => <Heading as="h2" size="xl" {...props} />,
    h3: (props: Record<string, unknown>) => <Heading as="h3" size="lg" {...props} />,
    h4: (props: Record<string, unknown>) => <Heading as="h4" size="md" {...props} />,
    h5: (props: Record<string, unknown>) => <Heading as="h5" size="sm" {...props} />,
    h6: (props: Record<string, unknown>) => <Heading as="h6" size="xs" {...props} />,
    a: (props: Record<string, unknown>) => <Link as='a' color='teal.500' isExternal {...props} />,
    p: (props: Record<string, unknown>) => <Text lineHeight={2} paddingBottom="4" fontSize="lg" {...props} />,
    img: (props: Record<string, unknown>) => <Image mb={4} {...props} />,
    pre: (props: Record<string, unknown>) => <CodeBlock {...props}/>,
    blockquote: (props: Record<string, unknown>) => <chakra.blockquote {...props} />,
    inlineCode: (props: Record<string, unknown>) => <Code my={2} px={2} color='red.500' borderRadius='0.3rem' overflow='hidden' {...props} />,
    ul: (props: Record<string, unknown>) => <UnorderedList {...props} />,
    ol: (props: Record<string, unknown>) => <OrderedList {...props} />,
    li: (props: Record<string, unknown>) => <ListItem {...props} />,
    text: (props: Record<string, unknown>) => <Text {...props} />,
    table: (props: Record<string, unknown>) => <Table {...props} />,
    thead: (props: Record<string, unknown>) => <Thead {...props} />,
    tbody: (props: Record<string, unknown>) => <Tbody {...props} />,
    tr: (props: Record<string, unknown>) => <Tr {...props} />,
    td: (props: Record<string, unknown>) => <Td {...props} />,
    th: (props: Record<string, unknown>) => <Th {...props} />,
    thematicBreak: (props: Record<string, unknown>) => <Divider {...props} />,
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
        <chakra.pre borderRadius='1rem' className={className} style={{...style, padding: '20px'}}>
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

const Table = (props: Record<string, unknown>) => {
  return (
    <TableContainer>
      <TableChakra>
        {props.children as React.ReactNode}
      </TableChakra>
    </TableContainer>
  )
}