function alternatingSums(array) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < array.length; i += 2) {
    oddSum += array[i];
  }
  for (let i = 1; i < array.length; i += 2) {
    evenSum += array[i];
  }
  return [oddSum, evenSum];
}

console.log(alternatingSums([50, 60, 50, 45, 100, 6]));
