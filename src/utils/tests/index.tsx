import React, { ReactNode } from 'react';
import { defaultTheme } from '../../themes';
import { ThemeProvider } from 'styled-components';
import { render as testingLibraryRender } from '@testing-library/react';

global.MutationObserver = require('mutation-observer');

export const render = (ui: ReactNode, options = {}) => {
  return testingLibraryRender(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>, options);
};
