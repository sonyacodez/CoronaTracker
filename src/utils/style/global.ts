import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-weight: normal;
    font-family: regular;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.blue};
  }

  body {
    font-size: 1.4rem;
  }
`;
