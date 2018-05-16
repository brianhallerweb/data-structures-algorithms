const subArraySum = require("./index");

describe("subArraySum", () => {
  it("should be a function", () => {
    expect(typeof subArraySum).toBe("function");
  });

  it("should return true for cases where there is a matching subArray", () => {
    expect(subArraySum([1, 2, 3, 4, 5], 10)).toBe(true);
    expect(subArraySum([1, 2, 3, 4, 5], 9)).toBe(true);
    expect(subArraySum([1, 2, 3, 4, 5], 7)).toBe(true);
    expect(subArraySum([1, 2, 3, 4, 5], 2)).toBe(true);
    expect(subArraySum([1, 2, 3, 4, 5], 16)).toBe(false);
    expect(subArraySum([1, 2, 3, 4, 5], 8)).toBe(false);
  });
});
