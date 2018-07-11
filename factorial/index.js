function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw Error("input must be an integer");
  }
  let result = 1;
  function multiply(i) {
    if (i === 0) return;
    result *= i;
    multiply(i - 1);
  }
  multiply(n);
  return result;
}

module.exports = factorial;
