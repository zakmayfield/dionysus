import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import { components } from './components';
import { semanticTokens } from './semantic-tokens';
import { styles } from './styles';
import type { ThemeConfig, ThemeDirection } from './theme.types';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = extendTheme({
  ...baseTheme,
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config,
  sizes: {
    container: {
      '2xl': '96rem',
      '3xl': '120rem',
    },
  },
});

export type Theme = typeof theme;

export * from './theme.types';
export * from './utils/is-chakra-theme';

export default theme;
