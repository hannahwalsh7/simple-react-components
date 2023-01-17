import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicContent from './BasicContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Basic Content',
  component: BasicContent,
} as ComponentMeta<typeof BasicContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicContent> = (args) => <BasicContent {...args} />;

export const BasicContentStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicContentStory.argTypes = {
    backgroundColor: {
        name: 'Background Color',
        options: ['bg-white', 'bg-tan'],
        control: { 
            type: 'select',
            labels: {
                'bg-white': 'White',
                'bg-tan': 'Tan'
            },
        },
        table: {
            category: 'Basic Attributes',
        },
    },
    title: {
        name: 'Title',
        control: { type: 'text' },
        table: {
            category: 'Basic Attributes',
        },
    },
    subtitle: {
        name: 'Subtitle',
        control: { type: 'text' },
        table: {
            category: 'Basic Attributes',
        },
    },
    subsectionHeader: {
        name: 'Subsection Header',
        control: { type: 'text' },
        table: {
            category: 'Basic Attributes',
        },
    },
    subsectionDescription: {
        name: 'Subsection Description',
        control: { type: 'text' },
        table: {
            category: 'Basic Attributes',
        },
    },
    image: {
        name: 'Image',
        control: { type: 'text' },
        description: 'Source of image',
        table: {
            category: 'Image',
        },
    },
    imageAltText: {
        name: 'Image Alt Text',
        control: { type: 'text' },
        description: 'Alt text for image',
        table: {
            category: 'Image',
        },
    },
    video: {
        name: 'Video Embed Code ID',
        control: { type: 'text' },
        description: 'Embed code ID',
        table: {
            category: 'Video',
        },
    },
    videoTitle: {
        name: 'Video Title',
        control: { type: 'text' },
        description: 'Video title',
        table: {
            category: 'Video',
        },
    },
    controls: {
        name: 'Show Video Controls',
        control: { type: 'boolean' },
        description: 'Show video controls',
        table: {
            category: 'Video',
            subcategory: 'Controls',
        },
    },
    autoplay: {
        name: 'Autoplay',
        control: { type: 'boolean' },
        description: 'Autoplay',
        table: {
            category: 'Video',
            subcategory: 'Controls',
        },
    },
    videoClosedCaptions: {
        name: 'Language Preference',
        control: {
            type: 'select',
            labels: {
            'en': 'English',
            'es': 'Spanish'
            },
        },
        options: ['en', 'es'],
        description: 'Language preference code in ISO 639-1 format',
        table: {
            category: 'Video',
            subcategory: 'Controls',
        },
    },
    ccLoad: {
        name: 'Load Closed Caption on Play',
        control: { type: 'boolean' },
        description: 'Load Closed Caption on Play',
        table: {
            category: 'Video',
            subscategory: 'Controls',
        },
    },
    CTAlabel: {
        name: 'CTA Button Label',
        control: { type: 'text' },
        table: {
            category: 'CTA Button',
        },
    },
    CTAtype: {
        name: "CTA Button Type",
        control: {
            type: 'select',
            labels: {
            'primary': 'Primary',
            'secondary': 'Secondary'
            },
        },
        options: ["primary", "secondary"],
        description: "Button type/whether the button is used to communicate the primary or secondary action",
        table: {
            category: 'CTA Button',
        },
    },
    CTAurl: {
        name: "Url",
        control: { type: "text" },
        description: "Url that will be routed to when button is clicked",
        table: {
            category: 'CTA Button',
        },
    },
        CTAcolor: {
        name: 'Color',
        description: 'Button color',
        options: ['primaryRed', 'secondaryBlue'],
        control: {
            type: 'select',
            labels: {
            'primaryRed': 'Primary Red',
            'secondaryBlue': 'Secondary Blue'
            },
        },
        table: {
            category: 'CTA Button',
        },
    }
};

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
BasicContentStory.args = {
    backgroundColor: '#FFFFFF',
    title: 'Test Title',
    subtitle: loremIpsum,
    subsectionHeader: 'Test Subsection Header',
    subsectionDescription: loremIpsum,
    image: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    imageAltText: 'Test image alt text',
    video: 'qsMpKU5Ld94',
    videoTitle: 'Test Video',
    controls: true,
    autoplay: false,
    videoClosedCaptions: 'en',
    ccLoad: false,
    CTAlabel: 'Test CTA label',
    CTAtype: 'primary',
    CTAcolor: 'primaryRed',
    CTAurl: 'testURL'
};

BasicContentStory.storyName = "Basic Content";
