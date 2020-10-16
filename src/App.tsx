import React from 'react';
import i18n from './locale/i18n';
import { defaultTheme } from './themes';
import { GlobalStyle } from './utils/style';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import Overview from './screens/Overview/Overview';

export const App = () => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Overview />
    </ThemeProvider>
  </I18nextProvider>
);
