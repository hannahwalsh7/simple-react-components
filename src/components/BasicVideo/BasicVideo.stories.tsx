import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicVideo from './BasicVideo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Basic Video',
  component: BasicVideo,
} as ComponentMeta<typeof BasicVideo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicVideo> = (args) => <BasicVideo {...args} />;

export const BasicVideoStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicVideoStory.argTypes = {
  embedId: {
    name: 'Embed Code ID',
    control: { type: 'text' },
    description: 'Embed code ID',
  },
  videoTitle: {
    name: 'Video Title',
    control: { type: 'text' },
    description: 'Video title',
  },
  controls: {
    name: 'Show Video Controls',
    control: { type: 'boolean' },
    description: 'Show video controls',
    table: {
      category: 'Controls',
    },
  },
  autoplay: {
    name: 'Autoplay',
    control: { type: 'boolean' },
    description: 'Autoplay',
    table: {
      category: 'Controls',
    },
  },
  ccLanguagePreference: {
    name: 'Language Preference',
    control: { type: 'text' },
    description: 'Language preference code in ISO 639-1 format',
    table: {
      category: 'Controls',
    },
  },
  ccLoad: {
    name: 'Load Closed Caption on Play',
    control: { type: 'boolean' },
    description: 'Load Closed Caption on Play',
    table: {
      category: 'Controls',
    },
  },
}

BasicVideoStory.args = {
  embedId: 'qsMpKU5Ld94',
  videoTitle: 'Test Video',
  controls: true,
  autoplay: true,
  ccLanguagePreference: 'en',
  ccLoad: false,
};

BasicVideoStory.storyName = "BasicVideo";