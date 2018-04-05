//Wrapper-helper recursion with memoization
function fib(n) {
  const cache = {};
  function recurse(i) {
    if (i < 2) return i;
    if (cache[i]) return cache[i];

    cache[i] = recurse(i - 1) + recurse(i - 2);
    return cache[i];
  }

  return recurse(n);
}

console.log(fib(7));

// recursion with side effects
function nthFibonacci(n, i, fibonacci) {
  fibonacci = fibonacci || [0, 1];
  i = i || 2;

  if (n < 2) {
    return fibonaci[n];
  }

  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  if (i === n) {
    return fibonacci[i];
  }

  return nthFibonacci(n, i + 1, fibonacci);
}
