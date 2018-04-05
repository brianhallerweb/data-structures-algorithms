// n choose k

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
