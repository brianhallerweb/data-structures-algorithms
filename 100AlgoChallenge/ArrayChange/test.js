const arrayChange = require("./index");

describe("arrayChange", () => {
  it("should return the minimum number of moves", () => {
    const result = arrayChange([1, 1, 1]);
    expect(result).toBe(3);
  });
});
