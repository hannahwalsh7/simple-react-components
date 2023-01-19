import React from "react";
import { render } from "@testing-library/react";
import BasicContent from "./BasicContent";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const imgUrl = 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';

describe("Basic Content", () => {
  test("renders the Basic Content component", () => {
    render(<BasicContent backgroundColor='#FFFFFF'
                         title='Test Title'
                         subtitle={loremIpsum}
                         subsectionHeader='Test Subsection Header'
                         subsectionDescription={loremIpsum}
                         image={imgUrl}
                         imageAltText='Test image alt text'
                         video='qsMpKU5Ld94'
                         videoTitle='Test Video'
                         controls={true}
                         autoplay={false}
                         videoClosedCaptions='en'
                         ccLoad={false}
                         CTAlabel='Test CTA label'
                         CTAtype='primary'
                         CTAcolor='primaryRed'
                         CTAurl='testURL'
          />);
  });

  test("renders the Basic Content component with default background", () => {
    render(<BasicContent title='Test Title'
                         subtitle={loremIpsum}
                         subsectionHeader='Test Subsection Header'
                         subsectionDescription={loremIpsum}
                         image={imgUrl}
                         imageAltText='Test image alt text'
                         video='qsMpKU5Ld94'
                         videoTitle='Test Video'
                         controls={true}
                         autoplay={false}
                         videoClosedCaptions='en'
                         ccLoad={false}
                         CTAlabel='Test CTA label'
                         CTAtype='primary'
                         CTAcolor='primaryRed'
                         CTAurl='testURL'
          />);
  });

  test("renders the Basic Content component image only", () => {
    render(<BasicContent image={imgUrl}
                         imageAltText='Test image alt text'
                         video='qsMpKU5Ld94'
          />);
  });

  test("renders the Basic Content component video only", () => {
    render(<BasicContent video='qsMpKU5Ld94'
                         videoTitle='Test Video'
                         controls={true}
                         autoplay={false}
                         videoClosedCaptions='en'
                         ccLoad={false}
          />);
  });

  test("renders the Basic Content component text only", () => {
    render(<BasicContent title='Test Title'
                         subtitle={loremIpsum}
                         subsectionHeader='Test Subsection Header'
                         subsectionDescription={loremIpsum}
          />);
  });

  test("renders the Basic Content component CTA button only", () => {
    render(<BasicContent CTAlabel='Test CTA label'
                         CTAtype='primary'
                         CTAcolor='primaryRed'
                         CTAurl='testURL'
          />);
  });
});