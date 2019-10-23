import { useState } from "react";
import { defaultResumeData } from "./data.js";
const useResumeData = (initialValue = defaultResumeData) => {
  const [state, setState] = useState(initialValue);
  return [state, setState];
};
export default useResumeData;
