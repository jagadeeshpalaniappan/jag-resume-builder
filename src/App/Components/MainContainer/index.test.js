import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { Provider } from "nonaction";
import { TextContainer } from "../../Container";
import MainContainer from "./index.js";
// afterEach(cleanup);
// duplicate of setupTests.js
test("<MainContainer /> ResumePreviewer lazy load should work", async () => {
  const { container } = render(
    <Provider inject={[TextContainer]}>
      <MainContainer />
    </Provider>
  );
  const ResumePreviewer = await waitForElement(() =>
    container.querySelector(".preview")
  );
  // Test Lazy load component using `waitforElement`!
  // const Content = ResumePreviewer.querySelector('span');
  expect(ResumePreviewer.textContent !== "").toEqual(true);
  //Test Lazy load
});

// const ResumeEditor = container.querySelector('.CodeMirror');
// ResumeEditor.CodeMirror.setValue should make editor change.

// Cause jest dom did not have createTextRange(maybe codemirror fallback IE API)
// so, we could not test for codemirror (like. setValue)...
// bellow is the exception message when codemirror onChange trigger
// TypeError: range(...).getClientRects is not a function
