// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// Example
// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.

function arrayChange(array) {
  let moves = 0;
  for (let i = 1; i <= array.length; i++) {
    while (array[i] <= array[i - 1]) {
      array[i] += 1;
      moves++;
    }
  }
  return moves;
}

module.exports = arrayChange;
