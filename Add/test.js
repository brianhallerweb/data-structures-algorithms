const add = require("./index");

describe("add", () => {
  it("should add numbers", () => {
    const sum = add(1, 2, 3, 4, -45.5);
    expect(sum).toBe(-35.5);
  });

  it("should add 0", () => {
    const sum = add(0);
    expect(sum).toBe(0);
  });
});
