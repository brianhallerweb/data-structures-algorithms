function vowels(str) {
  const vowels = str.toLowerCase().match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}

function vowels(str) {
  let count = 0;
  for (letter of str.toLowerCase()) {
    if (["a", "e", "i", "o", "u"].includes(letter)) count++;
  }
  return count;
}
