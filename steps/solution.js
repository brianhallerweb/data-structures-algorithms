function steps(n, i = 1) {
  if (n === 0) {
    return;
  }
  let string = "#".repeat(i) + " ".repeat(n - 1);
  console.log(string);
  steps(n - 1, i + 1);
}

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let string = "#".repeat(i) + " ".repeat(n - i);
    console.log(string);
  }
}
