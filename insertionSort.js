//Insertion Sort
// stable sort
// time: O(n^2)
// aux space: O(1)

//This is a fairly simple sort algorithm but the approach was a little difficult for me to code and to follow just by reading the code. It works by looping through the array, pluck out the first out-of-order element, slide over 1 place to the right all previous elements that are greater than the out-of-order element, and then insert the out-of-order element in the appropriate place.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp; // this has to be j+1 to undo the extra j--
  }
  return arr;
}
