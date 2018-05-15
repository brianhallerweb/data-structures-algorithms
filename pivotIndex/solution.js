// diagram
// initialize left sum and right sum
// loop through array and set right sum to total
// loop thorugh again and, for each element, add to left sum
// and subtract from right sum
// if left and right are equal, then you return index.
// else return -1

function pivotIndex(arr) {
  if (arr.length < 3) return -1;
  let leftSum = 0;
  let rightSum = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length; i++) {
    if (rightSum - arr[i] === leftSum) {
      return i;
    }
    leftSum = leftSum + arr[i];
    rightSum = rightSum - arr[i];
  }
  return -1;
}
