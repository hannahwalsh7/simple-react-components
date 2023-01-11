import React from "react";
import { render } from "@testing-library/react";

import BasicVideo from "./BasicVideo";

describe("BasicVideo", () => {
  test("renders the BasicVideo component", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls={true}
                       autoplay={false}
                       ccLanguagePreference='en'
                       ccLoad={false}/>);
  });
});