// Pivot Index

//Given an array of integers, find the pivot index where the sum of the items
// to the left equal to the sum of the items to the right.

// Examples
// Input: [1, 2, 1, 6, 3, 1] => Output: 3
// Input: [5, 2, 7] => Output: ­1
// Input: [­1, 3, ­3, 2] => Output: 1

//input
// array of integers

// output
// index integer
// If there is more than one valid pivot index, return the first one you encounter.
// If there is no valid pivot index, return `-1`.

//constraints
// time complexity is O(n) and aux space O(1)

// [1, 1, 1, 1, 1];

// leftSum = 2
// rightSum = 2

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

module.exports = pivotIndex;
