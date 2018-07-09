function add(...nums) {
  let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
}

function add(...nums) {
  return nums.reduce((accum, b) => accum + b, 0);
}
