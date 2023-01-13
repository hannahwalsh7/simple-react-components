import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SpotlightCard from './SpotlightCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Spotlight Card',
  component: SpotlightCard,
} as ComponentMeta<typeof SpotlightCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpotlightCard> = (args) => <SpotlightCard {...args} />;

export const SpotlightCardStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SpotlightCardStory.argTypes = {
  title: {
    name: 'Title',
    control: { type: 'text' },
    table: {
      category: 'Text',
    },
  },
  subtitle: {
    name: 'Subitle',
    control: { type: 'text' },
    table: {
      category: 'Text',
    },
  },
  description: {
    name: 'Description',
    control: { type: 'text' },
    table: {
      category: 'Text',
    },
  },
  imageSource: {
    name: 'Image Source',
    control: { type: 'text' },
    table: {
        category: 'Image'
    }
  },
  imageAltText: {
    name: 'Image Alt Text',
    control: { type: 'text' },
    table: {
        category: 'Image'
    }
  },
  textLink: {
    name: 'Text Link',
    control: { type: 'text' },
    table: {
        category: 'Links'
    }
  }
};
SpotlightCardStory.args = {
    title: 'Test Title',
    imageSource: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    imageAltText: 'Test alt text',
    subtitle: 'Test subtitle',
    description: 'Test description',
    textLink: 'Test link'
};

SpotlightCardStory.storyName = "Spotlight Card";
