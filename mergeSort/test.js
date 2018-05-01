const sorts = require("./index");
const merge = sorts.merge;
const mergeSort = sorts.mergeSort;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe("Merge sort", () => {
  test("merge function can join together two sorted arrays", () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test("sorts an array", () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});
