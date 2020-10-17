import React from 'react';
import { CustomText as CustomTextComponent } from '..';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storybookColorOptions, storybookFontSizeOptions } from '../../../utils/utils';

export default {
  title: 'Shared',
  decorators: [withKnobs],
};

export const CustomText = () => (
  <CustomTextComponent
    text={text('Type your text here...', 'Text')}
    color={select('Colors', storybookColorOptions, storybookColorOptions.black)}
    size={select('Size', storybookFontSizeOptions, storybookFontSizeOptions[12])}
  />
);
