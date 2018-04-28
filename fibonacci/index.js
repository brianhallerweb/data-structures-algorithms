// Simple iterative solution
function fib(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("input must be a positive integer");
  }
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }
  return fibonacci[n];
}

// //Pure recursion (top down multiple recursion)
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }
//
// // recursion with side effects
// function nthFibonacci(n, i, fibonacci) {
//   fibonacci = fibonacci || [0, 1];
//   i = i || 2;
//
//   if (n < 2) {
//     return fibonaci[n];
//   }
//
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   if (i === n) {
//     return fibonacci[i];
//   }
//
//   return nthFibonacci(n, i + 1, fibonacci);
// }
//
// //Wrapper-helper recursion (bottom up single recursion)
// function fib(n) {
//   let fibonacci = [0, 1];
//   function traverse(i) {
//     if (i > n) return;
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     traverse(i + 1);
//   }
//   traverse(2);
//   return fibonacci[n];
// }
//
// //Wrapper-helper recursion with memoization
// function fib(n) {
//   const cache = {};
//   function recurse(i) {
//     if (i < 2) return i;
//     if (cache[i]) return cache[i];
//
//     cache[i] = recurse(i - 1) + recurse(i - 2);
//     return cache[i];
//   }
//
//   return recurse(n);
// }

module.exports = fib;
