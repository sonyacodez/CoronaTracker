import React from 'react';
import i18n from './locale/i18n';
import { defaultTheme } from './themes';
import { GlobalStyle } from './utils/style';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import CustomText from './components/Shared/CustomText/CustomText';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CustomText text="Hello world!" color="purple1" size="s52" />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;


