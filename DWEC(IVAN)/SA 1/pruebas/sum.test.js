import { sum } from "./sum.js";
import { describe, expect, test } from 'vitest';

describe("sum", () => {
  test("sumar 1 + 2 es igual a 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("sumar 1 + -2 es igual a -1", () => {
    expect(sum(1, -2)).toBe(-1);
  });
});