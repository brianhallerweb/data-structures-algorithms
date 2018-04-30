const bubbleSort = require("./index");

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe("Bubble sort", () => {
  test("bubbleSort is a function", () => {
    expect(typeof bubbleSort).toEqual("function");
  });

  test("sorts an array", () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});
