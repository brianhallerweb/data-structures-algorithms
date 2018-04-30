function maxChar(str) {
  let obj = {};
  for (let letter of str) {
    if (obj[letter]) {
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
