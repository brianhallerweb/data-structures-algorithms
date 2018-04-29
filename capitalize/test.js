const capitalize = require("./index");

describe("capitalize", () => {
  it("should be defined as a function", () => {
    expect(typeof capitalize).toEqual("function");
  });
  it("should capitalize the first letter of every word in a sentence", () => {
    expect(capitalize("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });
});
