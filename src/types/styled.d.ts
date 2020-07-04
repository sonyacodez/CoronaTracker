import 'styled-components';

export interface IColors {
  black: string;
  white: string;
  red: string;
  green1: string;
  yellow1: string;
  purple1: string;
  turquoise1: string;
  lightGray1: string;
  gray1: string;
  lightBlue1: string;
  blue: string;
  navy: string;
}

export interface IFontSizes {
  s8: string;
  s10: string;
  s12: string;
  s13: string;
  s14: string;
  s15: string;
  s16: string;
  s18: string;
  s20: string;
  s22: string;
  s24: string;
  s26: string;
  s28: string;
  s32: string;
  s44: string;
  s52: string;
}

export interface IShadows {
  shadow1: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    fontSizes: IFontSizes;
    shadows: IShadows;
  }
}
