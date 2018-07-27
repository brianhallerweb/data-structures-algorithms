const flattenArray = require("./index");

test("flattenArray", () => {
  expect(flattenArray([1, 2, 3, [1, 2]])).toEqual([1, 2, 3, 1, 2]);

  expect(flattenArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
});
