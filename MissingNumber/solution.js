function missingNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr[0] !== 1) {
    return 1;
  }
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] !== sortedArr[i] + 1) {
      return sortedArr[i] + 1;
    }
  }
  return 100;
}
