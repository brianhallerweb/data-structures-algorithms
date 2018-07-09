const factorial = require("./index");

describe("factorial", () => {
  it("should be a defined function", () => {
    expect(typeof factorial).toEqual("function");
  });
  it("should throw an error when input is less than 0", () => {
    expect(() => factorial(-1)).toThrow();
  });
  it("should throw an error when input isn't an integer", () => {
    expect(() => factorial(1.1)).toThrow();
  });
  it("should return 01 when input is 0", () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });
  it("should return 120 when input is 5", () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });
});
