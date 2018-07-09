const arrayReplace = require("./index");

describe("arrayReplace", () => {
  it("should replace elements in an array", () => {
    const result = arrayReplace([1, 2, 1, 5], 5, 3);
    expect(result).toEqual([1, 2, 1, 3]);
  });
  it("should replace elements in an array", () => {
    const result = arrayReplace([1, 2, 1, 6, 9, 1], 1, 2);
    expect(result).toEqual([2, 2, 2, 6, 9, 2]);
  });
  it("should replace elements in an array", () => {
    const result = arrayReplace([0], 0, 1);
    expect(result).toEqual([1]);
  });
});
