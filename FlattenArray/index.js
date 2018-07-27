// /Flatten a nested array. You must account for varying levels of nesting.

// Example
// flattenArray([[["a"]], [["b"]]]) should return ["a", "b"].
// flattenArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

function flattenArray(arr) {
  const flattenedArr = [];
  function traverse(el) {
    for (let i of el) {
      if (!Array.isArray(i)) {
        flattenedArr.push(i);
      } else {
        traverse(i);
      }
    }
  }
  for (let i of arr) {
    if (!Array.isArray(i)) {
      flattenedArr.push(i);
    } else {
      traverse(i);
    }
  }
  return flattenedArr;
}

module.exports = flattenArray;
