function adjacentElementProduct(array) {
  let max = array[0] * array[1];
  for (let i = 2; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > max) {
      max = array[i] * array[i + 1];
    }
  }
  return max;
}

console.log(adjacentElementProduct([3, 6, -20, -5, 7, 3]));
