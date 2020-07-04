import React from 'react';
import i18n from '../src/locale/i18n';
import { defaultTheme } from '../src/themes';
import { I18nextProvider } from 'react-i18next';
import { GlobalStyle } from '../src/utils/style';
import { ThemeProvider } from 'styled-components';
import { JSXFunction } from '../src/types/interfaces';

const StoryBookWrapper: React.FC<JSXFunction> = (storyFn) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </I18nextProvider>
  );
};
export default StoryBookWrapper;
