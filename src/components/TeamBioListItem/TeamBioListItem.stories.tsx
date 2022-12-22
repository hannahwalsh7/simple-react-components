import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TeamBioListItem from "./TeamBioListItem";

export default {
  title: "React Component Library/Team Bio List Item",
  component: TeamBioListItem,
} as ComponentMeta<typeof TeamBioListItem>;

const Template: ComponentStory<typeof TeamBioListItem> = (args) => <TeamBioListItem {...args} />;

export const TeamBioListItemStory = Template.bind({});
TeamBioListItemStory.argTypes = {
  itemType: {
    name: 'Item Type',
    description: 'Item type',
    options: [
      '',
      'email',
      'phone',
      'favoriteFood',
      'favoriteThings'
    ],
    control: {
      type: 'select',
      labels: {
        'email': 'Email',
        'phone': 'Phone',
        'favoriteFood': 'Favorite Food',
        'favoriteThings': 'Favorite Things',
      },
    }
  },
  isLink: {
    name: 'Email/Phone?',
    control: { type: 'boolean' },
    },
    
  linkText: {
    name: 'Team Member Email/Phone',
    control: { type: 'text' },
    description: 'Team member email or phone',
  },
  favoritesText: {
    name: 'Team Member Favorites',
    control: { type: 'text' },
    description: 'Team member favorites',
  },
};

TeamBioListItemStory.args = {
  itemType: 'Email',
  isLink: true,
  linkText: 'rover@gmail.com',
  favoritesText: 'Spicy Chicken Sandwich',
};

TeamBioListItemStory.storyName = "Team Bio List Item";