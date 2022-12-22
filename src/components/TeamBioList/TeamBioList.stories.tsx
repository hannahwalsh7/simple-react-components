import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TeamBioList from './TeamBioList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Team Bio List',
  component: TeamBioList,
} as ComponentMeta<typeof TeamBioList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamBioList> = (args) => <TeamBioList {...args} />;

export const TeamBioListStory = Template.bind({});
TeamBioListStory.argTypes = {
  removeTeamBioListItem1: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Email',
    },
  },
  emailLinkText: {
    name: 'Email',
    control: { type: 'text' },
    description: 'Email',
    table: {
      category: 'Email',
    },
  },
  removeTeamBioListItem2: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Phone',
    },
  },
  phoneLinkText: {
    name:'Phone',
    control: { type: 'text' },
    description: 'Phone',
    table: {
      category: 'Phone',
    },
  },
  removeTeamBioListItem3: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Favorite Food',
    },
  },
  favoriteFoodText: {
    name: 'Favorite Food',
    control: { type: 'text' },
    description: 'Favorite food',
    table: {
      category: 'Favorite Food',
    },
  },
  removeTeamBioListItem4: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Favorite Things',
    },
  },
  favoriteThingsText: {
    name: 'Favorite Things',
    control: { type: 'text' },
    description: 'Favorite things',
    table: {
      category: 'Favorite Things',
    },
  },
};
TeamBioListStory.args = {
  removeTeamBioListItem1: false,
  emailLinkText: "rover@gmail.com",
  removeTeamBioListItem2: false,
  phoneLinkText: "+1 123 456 7891",
  removeTeamBioListItem3: false,
  favoriteFoodText: "Dog Bones",
  removeTeamBioListItem4: false,
  favoriteThingsText: "Going for walks, barking at squirrels",
};

TeamBioListStory.storyName = "Team Bio List";