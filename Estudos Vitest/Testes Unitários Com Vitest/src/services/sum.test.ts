import { test, expect } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);

  expect(result).toEqual(3);
});
