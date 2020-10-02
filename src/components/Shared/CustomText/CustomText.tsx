import React from 'react';
import styled from 'styled-components/macro';
import { css, useTheme } from 'styled-components';
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
    <S.Text bold={bold} style={{ color: theme.colors[color], fontSize: theme.fontSizes[size] }}>
      {text}
    </S.Text>
  );
};

const S: any = {};

S.Text = styled.span<{ bold: boolean }>`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export default CustomText;
