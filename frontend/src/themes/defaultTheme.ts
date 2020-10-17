import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#000e1a',
  white: '#ffff',
  red: '#D8262E',
  fuschia: '#F9345E',
  green1: '#1CB142',
  yellow1: '#FFC25E',
  orange1: '#FA6400',
  purple1: '#6236FF',
  turquoise1: '#4FDAE0',
  lightGray1: '#EAEDF2',
  lightGray2: '#CDCADA',
  gray1: '#817C9B',
  gray2: '#9E9E9E',
  lightBlue1: '#D2DEFC',
  teal: '#489AC9',
  blue: '#007ce0',
  navy: '#1A1053',
};

const fontSizes = {
  s8: '0.8rem',
  s10: '1rem',
  s12: '1.2rem',
  s13: '1.3rem',
  s14: '1.4rem',
  s15: '1.5rem',
  s16: '1.6rem',
  s18: '1.8rem',
  s20: '2rem',
  s22: '2.2rem',
  s24: '2.4rem',
  s26: '2.6rem',
  s28: '2.8rem',
  s32: '3.2rem',
  s44: '4.4rem',
  s52: '5.2rem',
};

const shadows = {
  shadow1: '0px 0px 20px #0000001a',
};

const defaultTheme: DefaultTheme = {
  colors: {
    ...colors,
  },
  fontSizes: {
    ...fontSizes,
  },
  shadows: {
    ...shadows,
  },
};

export default defaultTheme;
