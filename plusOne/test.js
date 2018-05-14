const plusOne = require("./index");

describe("plusOne", () => {
  it("should be a function", () => {
    expect(typeof plusOne).toBe("function");
  });

  it("should simply add 1 to an array with a single element between 0 and 8", () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([5])).toEqual([6]);
    expect(plusOne([8])).toEqual([9]);
  });

  it("should add 1 to the last element when it is between 0 and 8", () => {
    expect(plusOne([1, 0])).toEqual([1, 1]);
    expect(plusOne([1, 5])).toEqual([1, 6]);
    expect(plusOne([1, 8])).toEqual([1, 9]);
  });

  it("should handle 'carrying the one' one place", () => {
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([8, 9])).toEqual([9, 0]);
  });

  it("should handle 'carrying the one' 2 places", () => {
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
    expect(plusOne([8, 9, 9])).toEqual([9, 0, 0]);
  });

  it("should handle 'carrying the one' in all places by adding a 1 to the start of the array. ", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
