import React from "react";
import styled from "styled-components";
// import EditArea from './EditArea.js';
import Mirror from "./MirrorEditor.js";
const ResumeEditor = ({ className, setText, width }) => {
  return (
    <div style={{ width }} className={className}>
      <Mirror setText={setText} />
    </div>
  );
};
export default styled(ResumeEditor)`
  flex-shrink: 0;
  height: 100%;
  width: 50%;
  color: rgb(204, 204, 204);
`;
