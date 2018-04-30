function palindrome(str) {
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  for (let i = 0; i < str.length; i++) {
    if (reversedStr[i] !== str[i]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {
  const reversedStr = str
    .split("")
    .reverse()
    .join("");
  return reversedStr === str;
}

function palindrome(str) {
  let arr = str.split("");
  return arr.every((letter, i) => letter === str[str.length - 1 - i]);
}
