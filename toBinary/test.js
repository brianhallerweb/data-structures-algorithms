const toBinary = require("./index");

describe("toBinary", () => {
  it("should be a function", () => {
    expect(typeof toBinary).toBe("function");
  });

  it("should return a correct binary string", () => {
    expect(toBinary(1)).toBe("1");
    expect(toBinary(23)).toBe("10111");
    expect(toBinary(45)).toBe("101101");
    expect(toBinary(100000)).toBe("110000110101");
    expect(toBinary(999)).toBe("1111100111");
  });
});
