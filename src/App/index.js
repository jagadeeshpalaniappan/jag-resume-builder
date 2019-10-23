import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import { Header, MainContainer } from "./Components";
import { Provider } from "nonaction";
import { TextContainer } from "./Container";
const App = ({ className }) => {
  return (
    <div className={className} id="jag-resume-builder-app">
      <Provider inject={[TextContainer]}>
        <Header />
        <MainContainer />
      </Provider>
    </div>
  );
};
export default styled(App)`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  @media print {
    &,
    div {
      display: block;
      height: auto;
      /* Reset to normalize for FireFox */
    }
    .no-print,
    .no-print * {
      display: none !important;
    }
  }
`;
