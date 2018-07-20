const almostIncreasingSequence = require("./index");

test("almostIncreasingSequence", () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false);
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true);
  expect(almostIncreasingSequence([1, 2, 2, 2, 3])).toBe(false);
  expect(almostIncreasingSequence([1, 5, 8, 9, 51])).toBe(true);
  expect(almostIncreasingSequence([5, 0, 0, 20])).toBe(false);
});
