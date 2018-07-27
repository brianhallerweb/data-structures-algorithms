const bubbleSort = require("./index");

test("Bubble sort", () => {
  expect(bubbleSort([100, -40, 500, -124, 0, 21, 7])).toEqual([
    -124,
    -40,
    0,
    7,
    21,
    100,
    500
  ]);
  expect(bubbleSort([1, 0])).toEqual([0, 1]);
});
