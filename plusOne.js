// Plus One - Given a positive integer represented by an array of digits, add one that number.
// Input: [1,2,3]  =>	Output: [1,2,4]
// Input: [1, 9]	=>	Output: [2,0]
// Input: [9,9,9]  =>  Output: [1,0,0,0]
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

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
