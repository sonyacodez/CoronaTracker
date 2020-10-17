import React from 'react';
import StoryBookWrapper from './StoryBookWrapper';
import { addDecorator, configure } from '@storybook/react';

addDecorator(StoryBookWrapper);

configure(require.context('../src/', true, /\.stories\.(js|ts|tsx)$/), module);
