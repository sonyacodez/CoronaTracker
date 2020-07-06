import React from 'react';
import CustomText from '../CustomText';
import styled, { useTheme } from 'styled-components/macro';
import { PlainFunction } from '../../../types/interfaces';
import { IColors, IFontSizes } from '../../../types/styled';

interface IProps {
  text?: string;
  width?: number;
  height?: number;
  padding?: number;
  iconWidth: number;
  iconHeight: number;
  disabled?: boolean;
  borderRadius?: boolean;
  onClick: PlainFunction;
  iconColor: keyof IColors;
  textColor?: keyof IColors;
  textSize?: keyof IFontSizes;
  backgroundColor?: keyof IColors;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<IProps> = (props) => {
  const {
    text,
    // width,
    // height,
    // padding,
    // onClick,
    // disabled,
    textSize,
    textColor,
    iconColor,
    iconWidth,
    iconHeight,
    icon: Icon,
    // borderRadius,
    // backgroundColor,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <S.Wrapper {...rest}>
      {Icon && <Icon fill={iconColor} width={iconWidth} height={iconHeight} />}
      <CustomText text={text} size={textSize} color={textColor} />
    </S.Wrapper>
  );
};

export default Button;

const S: any = {};

S.Wrapper = styled.div<{
  backgroundColor?: string;
  borderRadius?: boolean;
  disabled?: boolean;
  padding?: number;
  width?: number;
  height?: number;
}>`
  display: flex;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
