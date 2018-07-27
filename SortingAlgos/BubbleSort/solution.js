// using a nested for loop, check each pair of elements, and put them in order.
// Every pass will correctly position the last element, so you can reduce the size of the inner loop by 1 on each pass.
// it has time complexity of O(n^2)
// it is a stable sort, meaning that equal valued elements stay in their original order
// Bubble sort is very ineffecient so it is never used in practice - insertion sort is
// always better than bubble sort.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}
