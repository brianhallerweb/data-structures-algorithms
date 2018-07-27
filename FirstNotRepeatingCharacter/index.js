// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Examples
// For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.
// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(str) {
  const objMap = {};
  for (let letter of str) {
    if (objMap[letter]) {
      delete objMap[letter];
    } else {
      objMap[letter] = 1;
    }
  }
  const firstNotRepeating = Object.keys(objMap)[0];
  return firstNotRepeating || "_";
}

module.exports = firstNotRepeatingCharacter;
