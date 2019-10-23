import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useResumeData from "./useResumeData";
import { defaultResumeData } from "./data";

test("should set initial", () => {
  const { result } = renderHook(() => useResumeData());
  expect(result.current[0]).toEqual(defaultResumeData);
});
test("should change text", () => {
  const { result } = renderHook(() => useResumeData());
  act(() => result.current[1]("work"));
  expect(result.current[0]).toBe("work");
});
