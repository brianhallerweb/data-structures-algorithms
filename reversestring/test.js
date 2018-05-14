const reverse = require("./index");

describe("reverse", () => {
  it("should reverse a string", () => {
    expect(reverse("abcd")).toBe("dcba");
    expect(reverse("  abcd")).toBe("dcba  ");
  });
});
