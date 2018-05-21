const maxChar = require("./index");

describe("maxChar", () => {
  it("should find the most frequently used char", () => {
    expect(maxChar("a")).toEqual("a");
    expect(maxChar("abcdefghijklmnaaaaa")).toBe("a");
  });

  it("should work with numbers in the string", () => {
    expect(maxChar("ab1c1d1e1f1g1")).toBe("1");
  });
});
