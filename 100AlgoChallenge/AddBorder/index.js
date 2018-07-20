function addBorder(matrix) {
  const wall = "*".repeat(matrix[0].length + 2);
  matrix = matrix.map(el => `*${el}*`);
  matrix.unshift(wall);
  matrix.push(wall);
  return matrix;
}

console.log(addBorder(["abcvvv", "dedvvv", "abcvvv", "dedvvv"]));
