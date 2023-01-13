import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import SpotlightCard from "./SpotlightCard";

describe("SpotlightCard", () => {
    test("renders the SpotlightCard component", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            description="Test description"
            textLink="Test link"
        />);
    });

    test("renders the SpotlightCard component with only required fields", () => {
        render(
        <SpotlightCard
            title="Test Title"
        />);
    });

    test("renders the SpotlightCard component without image", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            description="Test description"
            textLink="Test link"
        />);
    });

    test("renders the SpotlightCard component without image alt text", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            subtitle="Test Subtitle"
            description="Test description"
            textLink="Test link"
        />);
    });

    test("renders the SpotlightCard component without subtitle", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            description="Test description"
            textLink="Test link"
        />);
    });

    test("renders the SpotlightCard component without description", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            textLink="Test link"
        />);
    });

    test("renders the SpotlightCard component without text link", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            description="Test description"
        />);
    });

    test("testing that read toggle is not displayed with a small description", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            description="Test description"
            textLink="Test link"
        />);

        const readMoreToggle = screen.queryByText('Read More');
        const readLessToggle = screen.queryByText('Read Less');
        expect(readMoreToggle).toBeNull();
        expect(readLessToggle).toBeNull();  
    });

    test("testing that read toggle behavior", () => {
        render(
            <SpotlightCard
            title="Test Title"
            imageSource="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"
            imageAltText="Test alt text"
            subtitle="Test Subtitle"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            textLink="Test link"
        />);

        let readMoreToggle = screen.queryByText('Read More');
        let readLessToggle = screen.queryByText('Read Less');
        expect(readMoreToggle).toBeDefined();
        expect(readLessToggle).toBeNull(); 
        
        fireEvent.click(screen.getByText('Read More'));

        readMoreToggle = screen.queryByText('Read More');
        readLessToggle = screen.queryByText('Read Less');
        expect(readMoreToggle).toBeNull();
        expect(readLessToggle).toBeDefined(); 

        fireEvent.click(screen.getByText('Read Less'));

        readMoreToggle = screen.queryByText('Read More');
        readLessToggle = screen.queryByText('Read Less');
        expect(readMoreToggle).toBeDefined();
        expect(readLessToggle).toBeNull(); 
    });
});