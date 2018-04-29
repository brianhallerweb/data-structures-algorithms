const reverse = require("./index");

describe("reverse", () => {
  it("should reverse a string", () => {
    expect(reverse("abcd")).toEqual("dcba");
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
