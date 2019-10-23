import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useProvided } from "nonaction";
import { TextContainer } from "../../Container";
import ResumePreviewer from "./ResumePreviewer";
import ResumeEditor from "./ResumeEditor";
import SeperatorBar from "./SeperatorBar.js";
import "github-markdown-css";
import createEventTargetHook from "create-event-target-hook";
const useWindowEvent = createEventTargetHook(window);

const MainContainer = ({ className }) => {
  const [text, setText] = useProvided(TextContainer);
  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [width, setWidth] = useState(window.innerWidth / 2);
  const markdownRef = useRef(null);

  // Partial fileText & text

  useWindowEvent("mouseup", () => setDrag(false));
  // The state `isDrag` must be false, when mouse up!
  // So we listen it in window! (Seems ugly, but it just works ha.)
  return (
    <div
      ref={markdownRef}
      className={className}
      onMouseMove={e => {
        if (!isDrag) return;
        const pageX = e.nativeEvent.pageX;
        setWidth(pageX - startX);
      }}
    >
      <ResumeEditor className="no-print" width={width} setText={setText} />
      <SeperatorBar
        className="no-print"
        isDrag={isDrag}
        setDrag={setDrag}
        setStartX={setStartX}
      />
      <ResumePreviewer>{text}</ResumePreviewer>
    </div>
  );
};

export default styled(MainContainer)`
  * {
    box-sizing: border-box;
  }
  height: 100%;
  display: flex;
`;
