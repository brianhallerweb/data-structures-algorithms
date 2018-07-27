const allLongestStrings = require("./index");

describe("allLongestStrings", () => {
  it("should return an array ot all the longest strings", () => {
    const result = allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);
    expect(result).toEqual(["aba", "vcd", "aba"]);
  });
});
