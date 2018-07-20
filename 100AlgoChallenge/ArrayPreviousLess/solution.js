function arrayPreviousLess(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let min;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        min = arr[j];
      }
    }
    min ? (result[i] = min) : (result[i] = -1);
  }
  return result;
}
