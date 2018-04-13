// Sorted & Rotated Array Search
// Given a rotated, sorted array and a target value, return the index of the target value. If the target value does not exist inside of the collection, return -1.
//
// A rotated, sorted array means that some number of elements have been taken from one end of the array and moved to the other end while maintaining the sorted status of the moved elements: [1,2,3,4,5,6,7] → [3,4,5,6,7,1,2].
//
// Input: Array of integers, target value
// Output: Integer index of target value (-1 if not found)
// Example
// Input: [6,8,11,15,17,3,5], 3      	=>	Output: 5
// Input: [6,8,11,15,17,3,5], 10		=>	Output: -1
// Constraints
// Time Complexity: O(log(N))
// Auxiliary Space Complexity: O(log(N))
// All elements of the array are unique

//Notes on the solution
// The approach to solving this problem is to do a modified binary search. The purpose of a binary search is just to determine which half the array holds a target value. That is normally done by assuming the array is sorted and then comparing target to mid. In this case, to determine which side holds the array, you have to do 2 steps. The first conditional checks which side is ordered. If the left side is ordered, you only look on the left side. If the right side is ordered, you only look on the right side. The next step is to check if the target value is in the ordered side or not. In this way, you can locate which half the target value resides in. This process is continued until the target value is located (or -1 is returned). In summary, this requires a binary-search-like process to solve.

function rotatedSearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[start] <= arr[mid]) {
      if (arr[start] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
