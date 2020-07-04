import React from 'react';
import CustomText from '.';
import { render } from '../../../utils/tests';
import { RenderResult } from '@testing-library/react';

describe('CustomText', () => {
  let CustomTextComponent: RenderResult;
  const sizeProps = 's12';
  const colorProps = 'black';
  const textProps = 'I am text';

  beforeEach(() => {
    CustomTextComponent = render(
      <CustomText text={textProps} />
    )
  });

  it('Render component with default styling', () => {
    const { container, getByText } = CustomTextComponent;
      expect(container.firstChild).toMatchSnapshot();
      expect(getByText(textProps)).toBeInTheDocument();
  })
  
    it('Render component with default styling', () => {
    const { container }= render(
      <CustomText text={textProps} color={colorProps} size={sizeProps} />
    )
      expect(container.firstChild).
  })
});