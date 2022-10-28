import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navigation from './Navigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const NavigationStory = Template.bind({});
NavigationStory.parameters = {
  layout: 'fullscreen'
}
NavigationStory.argTypes = {
  logoImage: {
    name: 'Logo Image',
    control: { type: 'text' },
    description: 'Logo image',
  },
  profileImage: {
    name: 'Profile Image',
    control: { type: 'text' },
    description: 'Profile image',
  },
}
NavigationStory.args = {
  logoImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_circle_frame_transparent.svg/512px-Red_circle_frame_transparent.svg.png',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
};

NavigationStory.storyName = "Navigation";
