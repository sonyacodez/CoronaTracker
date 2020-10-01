import React from 'react';
import { useTheme } from 'styled-components';
import { IColors, IFontSizes } from '../../../types/styled';

interface IProps {
  text?: string;
  bold?: boolean;
  color?: keyof IColors;
  size?: keyof IFontSizes;
}

const CustomText: React.FC<IProps> = ({ color = 'black', size = 's14', text, bold }) => {
  const theme = useTheme();

  return (
    <span style={{ color: theme.colors[color], fontSize: theme.fontSizes[size] }}>{text}</span>
  );
};

export default CustomText;
