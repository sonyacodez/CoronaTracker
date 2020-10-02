import React from 'react';
import LineGraphComponent from './LineGraph';
import { withKnobs, select } from '@storybook/addon-knobs';
import { storybookColorOptions } from '../../../../utils/utils';

export default {
  title: 'Charts/LineGraph',
  decorators: [withKnobs],
};

const graphData = [
  { numOfCases: 400 },
  { numOfCases: 200 },
  { numOfCases: 300 },
  { numOfCases: 100 },
  { numOfCases: 330 },
  { numOfCases: 150 },
  { numOfCases: 380 },
];

export const LineGraph = () => (
  <LineGraphComponent
    graphData={graphData}
    lineColor={select('Colors', storybookColorOptions, storybookColorOptions.purple1)}
  />
);
