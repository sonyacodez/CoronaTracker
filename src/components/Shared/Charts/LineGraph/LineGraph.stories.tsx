import React from 'react';
import LineGraphComponent from './LineGraph';
import { withKnobs, select } from '@storybook/addon-knobs';
import { storybookColorOptions } from '../../../../utils/utils';

export default {
  title: 'Charts/LineGraph',
  decorators: [withKnobs],
};

export const LineGraph = () => (
  <LineGraphComponent
    lineColor={select('Colors', storybookColorOptions, storybookColorOptions.purple1)}
  />
);
