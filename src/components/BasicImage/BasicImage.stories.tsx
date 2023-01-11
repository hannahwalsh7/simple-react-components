import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicImage from './BasicImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Basic Image',
  component: BasicImage,
} as ComponentMeta<typeof BasicImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicImage> = (args) => <BasicImage {...args} />;

export const BasicImageStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicImageStory.argTypes = {
  image: {
    name: 'Image',
    control: { type: 'text' },
    description: 'Source of image',
  },
  imageAltText: {
    name: 'Image Alt Text',
    control: { type: 'text' },
    description: 'Alt text for image',
  }
}
BasicImageStory.args = {
  image: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  imageAltText: 'Trees and mountains',
};

BasicImageStory.storyName = "Basic Image";