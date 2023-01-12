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

  test("tests error when a valid embed id is not provided", () => {
    expect(() => render(<BasicVideo embedId= ''
                                    videoTitle= 'Test Video'
                                    controls={true}
                                    autoplay={false}
                                    ccLanguagePreference='en'
                                    ccLoad={false}/>))
      .toThrowError("Must provide a valid embed id.")
  });

  test("tests default input values for non-required fields", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'/>);
  });

  test("renders the BasicVideo component with controls disabled", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls={false}
                       autoplay={false}
                       ccLanguagePreference='en'
                       ccLoad={false}/>);
  });

  test("renders the BasicVideo component with autoplay enabled", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls={true}
                       autoplay={true}
                       ccLanguagePreference='en'
                       ccLoad={false}/>);
  });

  test("renders the BasicVideo component with spanish as the preferred language", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls={true}
                       autoplay={false}
                       ccLanguagePreference='es'
                       ccLoad={false}/>);
  });

  test("renders the BasicVideo component with CC on play enabled", () => {
    render(<BasicVideo embedId= 'qsMpKU5Ld94'
                       videoTitle= 'Test Video'
                       controls={true}
                       autoplay={false}
                       ccLanguagePreference='en'
                       ccLoad={true}/>);
  });
});