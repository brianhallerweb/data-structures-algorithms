const arrayPreviousLess = require("./index");

test("arrayPreviousLess", () => {
  expect(arrayPreviousLess([3, 5, 2, 4, 5])).toEqual([-1, 3, -1, 2, 4]);
  expect(arrayPreviousLess([6, 5, 20, 1, 7])).toEqual([-1, -1, 5, -1, 1]);
});
