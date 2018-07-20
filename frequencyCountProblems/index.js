/* Unique
*
* Given an array of integers, return an array with all duplicates removed.*
*
* Parameters
* Input: arr {Array of Integers}
* Output: {Array of Integers}
*
* Constraints
*
* Time: O(N)
* Space: O(N)
*
* Examples
* [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
* [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
* [1, 2, 3, 1, 2] --> [1, 2, 3]
*/

module.exports.unique = function(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = null;
  }
  return Object.keys(obj).map(key => Number(key));
};
/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

module.exports.wordCount = function(sentence) {
  const words = sentence
    .toLowerCase()
    .replace(/[^\w ]/g, "")
    .split(" ");
  const objMap = {};
  for (let word of words) {
    if (objMap[word]) {
      objMap[word]++;
    } else {
      objMap[word] = 1;
    }
  }
  return objMap;
};

/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

module.exports.rgb = function(string) {
  const rgb = [0, 0, 0];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "r") {
      rgb[0]++;
    } else if (string[i] === "g") {
      rgb[1]++;
    } else if (string[i] === "b") {
      rgb[2]++;
    }
  }
  return Math.min(...rgb);
};

/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 */

module.exports.missingNumber = function(n, arr) {
  const missingNumbers = [];
  let sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr[0] !== 1) {
    missingNumbers.push(1);
  }
  let i = 0;
  while (i < n - 2) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      sortedArr.splice(i + 1, 0, sortedArr[i] + 1);
      missingNumbers.push(sortedArr[i] + 1);
      i++;
    } else {
      i++;
    }
  }
  if (sortedArr[sortedArr.length - 1] !== n) {
    missingNumbers.push(n);
  }
  return missingNumbers;
};

/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

module.exports.letterSort = function(string) {
  return string
    .split("")
    .sort()
    .join("");
};

/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

module.exports.characterMode = function(string) {
  const objMap = {};
  for (let letter of string.toLowerCase().replace(/[^a-z]/g, "")) {
    if (!objMap[letter]) {
      objMap[letter] = 1;
    } else {
      objMap[letter]++;
    }
  }
  let max = 0;
  for (let key in objMap) {
    if (objMap[key] > max) {
      max = objMap[key];
    }
  }
  let result = "";
  for (let key in objMap) {
    if (objMap[key] === max) {
      result += key;
    }
  }
  return result;
};

/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 */

module.exports.sortDigits = function(n) {};

/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

module.exports.getDuplicates = function(arr) {
  const objMap = {};
  for (let el of arr) {
    if (objMap[el]) {
      objMap[el]++;
    } else {
      objMap[el] = 1;
    }
  }
  const duplicates = [];

  for (let key in objMap) {
    if (objMap[key] >= 2) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
};

/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

module.exports.anagramPair = function(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1Map = {};
  for (let letter of string1) {
    if (string1Map[letter]) {
      string1Map[letter]++;
    } else {
      string1Map[letter] = 1;
    }
  }
  const string2Map = {};
  for (let letter of string2) {
    if (string2Map[letter]) {
      string2Map[letter]++;
    } else {
      string2Map[letter] = 1;
    }
  }

  const string1Keys = Object.keys(string1Map);
  const string2Keys = Object.keys(string2Map);
  for (let letter in string1Keys) {
    if (!string1.includes(string2Keys[letter])) {
      return false;
    }
  }

  const string1Values = Object.values(string1Map);
  const string2Values = Object.values(string2Map);
  for (let letter in string1Values) {
    if (string1Values[letter] !== string2Values[letter]) {
      return false;
    }
  }

  return true;
};

/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */

module.exports.anagramPalindrome = function(string) {
  const objMap = {};
  for (let letter of string) {
    objMap[letter] ? objMap[letter]++ : (objMap[letter] = 1);
  }
  let oddCounter = 0;
  for (let key in objMap) {
    if (objMap[key] % 2) {
      oddCounter++;
    }
  }
  if (oddCounter === 1 && string.length % 2) {
    return true;
  }
  if (oddCounter === 0 && !string.length % 2) {
    return true;
  }
  return false;
};
