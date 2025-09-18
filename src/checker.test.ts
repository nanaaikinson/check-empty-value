import { describe, expect, test } from "vitest";
import { isEmpty } from ".";

describe("isEmpty", () => {
  // Null and undefined
  test("should return true for null and undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  // Booleans
  test("should return false for booleans", () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });

  // Numbers
  test("should return true only for 0", () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(-1)).toBe(false);
    expect(isEmpty(0.5)).toBe(false);
  });

  // Strings
  test("should return true for empty strings", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty(" ")).toBe(false);
  });

  // Arrays
  test("should work with arrays", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Objects
  test("should work with objects", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  // Maps and Sets
  test("should work with Maps and Sets", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    const map = new Map();
    map.set("key", "value");
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add("value");
    expect(isEmpty(set)).toBe(false);
  });

  // Functions
  test("should work with functions", () => {
    expect(isEmpty(() => {})).toBe(true);
    expect(isEmpty((a: number) => a)).toBe(false);
  });

  // Errors
  test("should work with Error objects", () => {
    expect(isEmpty(new Error(""))).toBe(true);
    expect(isEmpty(new Error("message"))).toBe(false);
  });
});
