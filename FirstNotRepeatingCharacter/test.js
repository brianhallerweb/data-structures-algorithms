const firstNotRepeatingCharacter = require("./index");

test("firstNotRepeatingCharacter", () => {
  expect(firstNotRepeatingCharacter("abacabad")).toBe("c");
  expect(firstNotRepeatingCharacter("abacabaabacaba")).toBe("_");
});
