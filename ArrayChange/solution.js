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
