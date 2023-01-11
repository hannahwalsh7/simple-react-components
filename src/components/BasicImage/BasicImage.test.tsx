import React from "react";
import { render } from "@testing-library/react";
import BasicImage from "./BasicImage";

describe("Basic Image", () => {
  test("renders the Basic Image component", () => {
    render(<BasicImage image="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" imageAltText="Dog" />);
  });

  test("renders the Basic Image component", () => {
    render(<BasicImage image="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />);
  });
});