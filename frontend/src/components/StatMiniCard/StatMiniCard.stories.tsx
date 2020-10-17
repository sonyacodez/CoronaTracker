import React from 'react';
import StatMiniCardComponent from './StatMiniCard';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'StatMiniCard',
  decorators: [withKnobs],
};

export const StatMiniCard = () => (
  <StatMiniCardComponent
    title={text('Type your title here...', 'Title')}
    currentNumOfCases={number('Current Number of Cases', 169123)}
    previousNumOfCases={number('Previous Number of Cases', 169123)}
  />
);
