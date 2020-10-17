import React from 'react';
import CustomText from './CustomText';
import { render } from '../../../utils/tests';
import { RenderResult } from '@testing-library/react';

describe('CustomText', () => {
  let CustomTextComponent: RenderResult;
  const textProps = 'I am text';

  beforeEach(() => {
    CustomTextComponent = render(<CustomText text={textProps} />)
  });

  it('Render component with default styling', () => {
    const { container, getByText } = CustomTextComponent;
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText(textProps)).toBeInTheDocument();
  })
});