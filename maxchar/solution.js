function maxChar(str) {
  let obj = {};
  for (let letter of str) {
    if (
      obj[
        letter
      ] /*"letter in obj" also works and is a little more declarative*/
    ) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  let max = 0;
  let maxChar;
  for (let key in obj) {
    if (obj[key] > max) {
      maxChar = key;
      max = obj[key];
    }
  }
  return maxChar;
}
