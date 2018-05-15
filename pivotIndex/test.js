const pivotIndex = require("./index");

describe("pivotIndex", () => {
  it("should be a function", () => {
    expect(typeof pivotIndex).toBe("function");
  });

  it("should return -1 for array length < 3", () => {
    expect(pivotIndex([1])).toBe(-1);
    expect(pivotIndex([1, 1])).toBe(-1);
  });

  it("should return the correct index for arrays with a pivot index", () => {
    expect(pivotIndex([5, 1, 5])).toBe(1);
    expect(pivotIndex([1, 1, 1, 1, 1])).toBe(2);
    expect(pivotIndex([15, 3, 2, 1, 20])).toBe(3);
    expect(pivotIndex([20, 1, 15, 3, 2])).toBe(1);
  });

  it("should return -1 for arrays with no pivot index", () => {
    expect(pivotIndex([10, 1, 5])).toBe(-1);
    expect(pivotIndex([15, 3, 2, 1, 21])).toBe(-1);
    expect(pivotIndex([21, 1, 15, 3, 2])).toBe(-1);
  });
});
