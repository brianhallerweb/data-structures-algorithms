function factorial(n) {
  let result = 1;
  function multiply(i) {
    if (i === 0) return;
    result *= i;
    multiply(i - 1);
  }
  multiply(n);
  return result;
}

function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw Error("input must be a whole number");
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
