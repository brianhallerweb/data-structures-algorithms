// Consecutive Subarray Sum
// Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.
//
// Input: Array of integers, target value
// Output: Boolean
// Example
// Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
// Input: [8,3,7,9,10,1,13], 50		=>	Output: false
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
// All elements are positive

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
