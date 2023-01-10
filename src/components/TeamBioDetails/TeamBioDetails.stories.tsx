import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TeamBioDetails from "./TeamBioDetails";

export default {
  title: "React Component Library/Team Bio/Team Bio Details",
  component: TeamBioDetails,
} as ComponentMeta<typeof TeamBioDetails>;

const Template: ComponentStory<typeof TeamBioDetails> = (args) => <TeamBioDetails {...args} />;

export const TeamBioDetailsStory = Template.bind({});
TeamBioDetailsStory.argTypes = {
  teamMemberImage: {
    name: 'Image Source',
    control: { type: 'text' },
    description: 'Source of image',
  },
  teamMemberName: {
    name: 'Team Member Name',
    control: { type: 'text' },
    description: 'Team member name',
  },
  teamMemberTitle: {
    name: 'Team Member Title',
    control: { type: 'text' },
    description: 'Team member title',
  },
  teamMemberDescription: {
    name: 'Team Member Description',
    control: { type: 'text' },
    description: 'Team member description',
  },
  removeEmail: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Email',
    },
  },
  email: {
    name: 'Email',
    control: { type: 'text' },
    description: 'Email',
    table: {
      category: 'Email',
    },
  },
  removePhone: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Phone',
    },
  },
  phone: {
    name:'Phone',
    control: { type: 'text' },
    description: 'Phone',
    table: {
      category: 'Phone',
    },
  },
  removeFavoriteFood: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Favorite Food',
    },
  },
  favoriteFood: {
    name: 'Favorite Food',
    control: { type: 'text' },
    description: 'Favorite food',
    table: {
      category: 'Favorite Food',
    },
  },
  removeFavoriteThings: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'Favorite Things',
    },
  },
  favoriteThings: {
    name: 'Favorite Things',
    control: { type: 'text' },
    description: 'Favorite things',
    table: {
      category: 'Favorite Things',
    },
  },
};
TeamBioDetailsStory.args = {
  teamMemberImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
  teamMemberName: 'Rover Smith',
  teamMemberTitle: 'Food Safety Director',
  teamMemberDescription: 'Lorem ipsum dolor sit amet consectetur. Faucibus nullam proin morbi elit purus. Ac tortor vitae condimentum feugiat risus cursus bibendum vel vitae. Id egestas urna suspendisse blandit. Sollicitudin sit nec velit aliquet euismod feugiat vitae dui.',
  removeEmail: false,
  email: 'rover@gmail.com',
  removePhone: false,
  phone: '+1 123 456 7891',
  removeFavoriteFood: false,
  favoriteFood: 'Spicy Chicken Sandwich',
  removeFavoriteThings: false,
  favoriteThings: 'Going for walks, barking at squirrels'
};

TeamBioDetailsStory.storyName = "Team Bio Details";