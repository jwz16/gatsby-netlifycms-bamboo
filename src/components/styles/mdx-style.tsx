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
  Link,
  useColorModeValue,
  Box
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
    p: (props: Record<string, unknown>) => <Text mx={0} px={0} lineHeight={2} paddingBottom="4" fontSize="lg" {...props} />,
    img: (props: Record<string, unknown>) => <Image my={4} {...props} />,
    pre: (props: Record<string, unknown>) => <CodeBlock {...props}/>,
    blockquote: (props: Record<string, unknown>) => <BlockQuote {...props} />,
    inlineCode: (props: Record<string, unknown>) => <InlineCode {...props} />,
    ul: (props: Record<string, unknown>) => <UnorderedList px={2} {...props} />,
    ol: (props: Record<string, unknown>) => <OrderedList px={2} {...props} />,
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
        <chakra.pre borderRadius='1rem' my={2} className={className} padding={5} style={{...style}}>
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
  )
}

const Table = (props: Record<string, unknown>) => {
  return (
    <TableContainer my={5}>
      <TableChakra>
        {props.children as React.ReactNode}
      </TableChakra>
    </TableContainer>
  )
}

const BlockQuote = (props: Record<string, unknown>) => {
  return (
    <chakra.blockquote
      bg={useColorModeValue('gray.50', 'gray.600')}
      my={5}
      mx={3}
      px={3}
      pt={3}
      borderLeft={10}
      borderStyle='solid'
      borderColor={useColorModeValue('gray.300', 'white.600')}
    >
      <Box bg='white' w={10} h="100%" />
      {props.children as React.ReactNode}
    </chakra.blockquote>
  )
}

const InlineCode = (props: Record<string, unknown>) => {
  return (
    <chakra.code
      mx={0}
      my={0}
      px={1}
      bg={useColorModeValue('gray.100', 'blue.900')}
      color='red.500'
      borderRadius='0.3rem'
      overflow='hidden'
      {...props}
    />
  )
}