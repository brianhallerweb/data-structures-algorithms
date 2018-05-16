function subArraySum(arr, target) {
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > target) {
      while (sum > target) {
        sum -= arr[start];
        start += 1;
      }
    }
    if (sum === target) {
      return true;
    }
  }
  return false;
}
