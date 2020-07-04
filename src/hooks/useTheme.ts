import { useContext } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components/macro';

const useTheme = (): DefaultTheme => {
  const theme = useContext(ThemeContext);
  return theme ?? {};
};

export default useTheme;
