// quicksort
// unstable
// time O(nlogn) on average and O(n^2) at worst
// aux space O(1)
// often used for primitive values because it is 2-3 times faster than mergesort (on average) and the primitive values makes the instability irrelevant.

// how quickSort works
// Each recursive call has one goal - find the correct index for the last element in the array.
// The "wall" is that index.
// This is achieved by:
//iterating through the array from start to end.
//if the i value is less than the end value, swap the i value with the wall value, and iterate the wall. This is the trickiest step to understand. The purpose of swapping and iterating the wall is to ensure that the i value is left of the wall, that's all...
// After the for loop is complete, you will have found the correct position for the end value, so you swap the end value for the wall value.
// Finally you progress with the next recursive call(s).
// In the end, you will have found the correct position for every element in the array and inserted the elements into those correct positions.

function quickSort(arr) {
  function divide(start, end) {
    if (start >= end) return;
    let wall = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < arr[end]) {
        [arr[i], arr[wall]] = [arr[wall], arr[i]];
        wall++;
      }
    }
    [arr[wall], arr[end]] = [arr[end], arr[wall]];
    divide(start, wall - 1);
    divide(wall + 1, end);
  }
  divide(0, arr.length - 1);
  return arr;
}
