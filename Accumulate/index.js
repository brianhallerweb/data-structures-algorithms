function accumulate(list, accumulator) {
  const out = [];
  for (let i = 0; i < list.length; i++) {
    out.push(accumulator(list[i]));
  }
  return out;
}

module.exports = accumulate;
