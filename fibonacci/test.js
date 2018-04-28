const fib = require("./index");

describe("fib", () => {
  it("should be a defined function", () => {
    expect(typeof fib).toEqual("function");
  });
  it("should throw an error when input is less than 0", () => {
    expect(() => fib(-1)).toThrow();
  });
  it("should throw an error when input isn't an integer", () => {
    expect(() => fib(1.1)).toThrow();
  });
  it("should return 0 when input is 0", () => {
    const result = fib(0);
    expect(result).toBe(0);
  });
  it("should return 8 when input is 6", () => {
    const result = fib(6);
    expect(result).toBe(8);
  });
});
