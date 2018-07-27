const insertionSort = require("./index");

test("insertion sort", () => {
  expect(insertionSort([100, -40, 500, -124, 0, 21, 7])).toEqual([
    -124,
    -40,
    0,
    7,
    21,
    100,
    500
  ]);
  expect(insertionSort([1, 0])).toEqual([0, 1]);
});
