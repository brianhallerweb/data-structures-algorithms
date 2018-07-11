const accumulate = (list, accumulator) => {
  const out = [];
  let idx = -1;
  const end = Array.isArray(list) ? list.length : 0;

  while (++idx < end) {
    out.push(accumulator(list[idx]));
  }

  return out;
};

function accumulate(list, accumulator) {
  const out = [];
  for (let i = 0; i < list.length; i++) {
    out.push(accumulator(list[i]));
  }
  return out;
}
