// quicksort
// unstable
// time O(nlogn) on average and O(n^2) at worst
// aux space O(1)
// often used for primitive values because it is 2-3 times faster than mergesort (on average) and the primitive values makes the instability irrelevant.

function quickSort(arr) {
  function divide(start, end) {
    if (start >= end) return;
    let mid = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < arr[end]) {
        [arr[i], arr[mid]] = [arr[mid], arr[i]];
        mid++;
      }
    }
    [arr[mid], arr[end]] = [arr[end], arr[mid]];
    divide(start, mid - 1);
    divide(mid + 1, end);
  }
  divide(0, arr.length - 1);
  return arr;
}
