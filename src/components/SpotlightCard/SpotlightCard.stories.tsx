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
    name: 'Subtitle',
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
  image: {
    name: 'Image',
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
  linkUrl: {
    name: "Link Url",
    control: { type: "text" },
    description: "Url for Link",
    table: {
      category: 'Text Link'
    }
  },
  linkText: {
    name: 'Link text',
    control: { type: 'text' },
    description: 'Link text',
    table: {
      category: 'Text Link'
    }
  },
  halfWidth: {
    name: 'Half Width',
    control: { type: 'boolean' },
    table: {
      category: 'Card Dimensions'
    }
  }
};

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
SpotlightCardStory.args = {
    title: 'Test Title',
    image: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    imageAltText: 'Test alt text',
    subtitle: 'Test subtitle',
    description: description,
    linkUrl: 'Test link',
    linkText: 'Meet the Leadership Team',
    halfWidth: true
};

SpotlightCardStory.storyName = "Spotlight Card";
