function reverse(str) {
  let reversedStr = "";
  for (let character of str) {
    reversedStr = character + reversedStr;
  }
  return reversedStr;
}

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
