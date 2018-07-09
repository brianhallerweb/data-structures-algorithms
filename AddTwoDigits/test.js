const addTwoNumbers = require("./index");

describe("addTwoNumbers", () => {
  it("should add each digit in a two digit number", () => {
    const sum = addTwoNumbers(11);
    expect(sum).toBe(2);
  });
  it("should add each digit in a two digit number", () => {
    const sum = addTwoNumbers(99);
    expect(sum).toBe(18);
  });
});
