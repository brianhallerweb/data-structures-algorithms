const alphebetSubSequence = require("./index");

test("alphebetSubSequence", () => {
  expect(alphebetSubSequence("effg")).toBe(false);
  expect(alphebetSubSequence("cdce")).toBe(false);
  expect(alphebetSubSequence("ace")).toBe(true);
  expect(alphebetSubSequence("bxz")).toBe(true);
});
