import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BrandIcon from "./BrandIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Icon/Brand Icon",
  component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrandIcon> = (args) => <BrandIcon {...args} />;

export const BrandIconStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BrandIconStory.argTypes = {
  name: {
    name: 'Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_celebration',
      'occasions_celebration-2',
      'occasions_collaboration',
      'occasions_collaboration-2',
      'occasions_disco',
      'restaurant_cow',
      'restaurant_team-member',
      'restaurant_tent-2',
      'technology_tablet-and-desktop',
      'technology_mobile-phone',
      'business_quote',
      'business_email',
      'menu_sandwich-classic-chicken'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_celebration' : 'Occasions | Celebration',
        'occasions_celebration-2' : 'Occasions | Celebration 2',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_collaboration-2' : 'Occasions | Collaboration 2',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_cow' : 'Restaurant | Cow',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'restaurant_tent-2' : 'Restaurant | Tent 2',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop',
        'technology_mobile-phone': 'Technology | Mobile Phone',
        'business_quote': 'Business | Quote',
        'business_email': 'Business | Email',
        'menu_sandwich-classic-chicken': 'Menu | Classic Chicken Sandwich'
      },
    },
  },
  color: {
    name: 'Color',
    description: 'Icon color',
    options: [
      'gray6',
      'primaryRed',
      'secondaryBlue',
      'secondaryTeal',
      'primaryWhite'
    ],
    control: {
      type: 'select',
      labels: {
        'gray6': 'Gray 6',
        'primaryRed': 'Primary Red',
        'secondaryBlue': 'Secondary Blue',
        'secondaryTeal': 'Secondary Teal',
        'primaryWhite': 'Primary White'
      },
    },
  }
};
BrandIconStory.args = {
  name: 'occasions_birthday-cake',
  color: 'primaryRed'
};

BrandIconStory.storyName = "Brand Icon";