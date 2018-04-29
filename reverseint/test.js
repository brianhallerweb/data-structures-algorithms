const reverseInt = require("./index");

describe("reverseInt", () => {
  it("should return a reversed positive integer", () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  it("should return a reversed negative integer", () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
  it("should return 0 with input of 0", () => {
    expect(reverseInt(0)).toEqual(0);
  });
});
