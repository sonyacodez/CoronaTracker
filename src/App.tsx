import React from 'react';
import { defaultTheme } from './themes';
import { GlobalStyle } from './utils/style';
import { ThemeProvider } from 'styled-components';
import CustomText from './components/Shared/CustomText';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CustomText text="Hello world!" color="purple1" size="s52" />
    </ThemeProvider>
  );
}

export default App;
