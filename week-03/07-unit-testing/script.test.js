import { test, expect, describe } from "vitest";
import {
  findMaxValue,
  factorial,
  areArraysEqual,
  toTitleCase,
  isPalindrome,
  add,
} from "./script";

describe("find max value", () => {
  test("[3, 7, 2, 8, 5] to be 8", () => {
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8);
  });
  test("[] to be null", () => {
    expect(findMaxValue([])).toBe(null);
  });
  test("[-10, -5, -1] to be -1", () => {
    expect(findMaxValue([-10, -5, -1])).toBe(-1);
  });
  test('"not an array" to be 8', () => {
    expect(findMaxValue("not an array")).toBe(null);
  });
});

describe("factorial", () => {
  test("5 to be 120", () => {
    expect(factorial(5)).toBe(120);
  });
  test("0 to be 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("-3 to be null", () => {
    expect(factorial(-3)).toBe(null);
  });
  test('"5" to be null', () => {
    expect(factorial("5")).toBe(null);
  });
});

describe("are arrays equal", () => {
  test("[1, 2, 3], [1, 2, 3] to be true", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("[1, 2, 3], [3, 2, 1] to be false", () => {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });
  test("[], [] to be true", () => {
    expect(areArraysEqual([], [])).toBe(true);
  });
  test("[1, 2], [1, 2, 3] to be false", () => {
    expect(areArraysEqual([1, 2], [1, 2, 3])).toBe(false);
  });
});

describe("are arrays equal", () => {
  test('"hello world" to be "Hello World"', () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  test('"JAVASCRIPT IS FUN" to be "Javascript Is Fun"', () => {
    expect(toTitleCase("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
  });
  test('"123 testing titles" to be "123 Testing Titles"', () => {
    expect(toTitleCase("123 testing titles")).toBe("123 Testing Titles");
  });
  test('12345 to be ""', () => {
    expect(toTitleCase(12345)).toBe("");
  });
});

describe("adding numbers together", function () {
  test("1 plus 2", function () {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = isPalindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = isPalindrome("nurses run");
    expect(result).toBe(true);
  });
});

describe("Words that are NOT palindromic", function () {
  test("Tim is great", function () {
    const result = isPalindrome("Tim is great");
    expect(result).toBe(false);
  });
  test("Weeeeeee", function () {
    const result = isPalindrome("Weeeeeee");
    expect(result).toBe(false);
  });
});
