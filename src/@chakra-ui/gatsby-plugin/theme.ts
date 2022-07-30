import { extendTheme } from '@chakra-ui/react'

const transitionProps = {
  transitionProperty: 'all',
  transitionDuration: 'ultra-slow'
};

const theme = extendTheme({
  styles: {
    global: {
      body: transitionProps,
    }
  },
  config: {
    disableTransitionOnChange: false
  }
});

export default extendTheme(theme)