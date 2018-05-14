function plusOne(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
      continue;
    } else {
      arr[i] = arr[i] + 1;
      return arr;
    }
  }
  arr.unshift(1);
  return arr;
}
