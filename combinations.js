// Given two integers `n` and `k`, return **all possible combinations** of `k` numbers from `1` to `n`.

// Example:
// n = 4
// k = 2
//
// result =[
//  [1,2],
// 	[1,3],
// 	[1,4],
// 	[2,3],
// 	[2,4],
// 	[3,4],
// ]

//**Time**: O(n choose k)
//**Space**: O(n choose k)

function combinations(n, k) {
  const result = [];
  function combine(depth, combo) {
    if (combo.length === k) {
      result.push(combo.slice());
      return;
    }
    if (depth > n) {
      return;
    }

    combine(depth + 1, combo);
    combo.push(depth);
    combine(depth + 1, combo);
    combo.pop();
  }
  combine(1, []);
  return result;
}
