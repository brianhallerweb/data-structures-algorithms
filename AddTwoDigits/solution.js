function addTwoNumbers(twoDigitNum) {
  const digits = String(twoDigitNum).split("");
  return digits.reduce((accum, digit) => accum + Number(digit), 0);
}
