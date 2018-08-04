// convert celsius to fahrenheit
// farenheit = celsius * 9/5 + 32

module.exports.convertToF = function(celsius) {
  return (celsius * 9) / 5 + 32;
};

//Reverse a string
module.exports.reverseString = function(str) {
  return str
    .split("")
    .reverse()
    .join("");
};

//Factorial
module.exports.factorialize = function(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Find the longest word
// Return the length of the longest word in the provided sentence.
// module.exports.findLongestWordLength = function(str) {
//   const words = str.replace(/[.,]/g, "").split(" ");
//   let longest = words[0].length;
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest) {
//       longest = words[i].length;
//     }
//   }
//   return longest;
// };
module.exports.findLongestWordLength = function(s) {
  return s.split(" ").reduce((x, y) => Math.max(x, y.length), 0);
};

//Return an array consisting of the largest number from each provided
// sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// module.exports.largestOfFour = function(arr) {
//   const largests = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largest = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largest) {
//         largest = arr[i][j];
//       }
//     }
//     largests.push(largest);
//   }
//   return largests;
// };
module.exports.largestOfFour = function(arr) {
  return arr.map(group =>
    group.reduce((prev, current) => (current > prev ? current : prev))
  );
};

//Check if a string (first argument, str) ends with the given target
//string (second argument, target) without using String.prototype.endsWith()
module.exports.confirmEnding = function(str, target) {
  const ending = str.substring(str.length - target.length);
  return ending === target;
};

// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// Do not use String.prototype.repeat()

module.exports.repeatStringNumTimes = function(str, num) {
  const repeats = [];
  for (let i = 1; i <= num; i++) {
    repeats.push(str);
  }
  return repeats.join("");
};

// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument). Return the truncated string with a ... ending.
module.exports.truncateString = function(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.substring(0, num) + "...";
};

// Create a function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.
module.exports.findElement = function(arr, func) {
  let element;
  for (let el of arr) {
    if (func(el)) {
      element = el;
      break;
    }
  }
  return element;
};

// Check if a value is classified as a boolean primitive. Return true or false.
module.exports.booWho = function(bool) {
  return typeof bool === "boolean";
};

// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
module.exports.titleCase = function(str) {
  const lowerCaseWords = str.toLowerCase().split(" ");
  const titleCaseWords = lowerCaseWords.map(
    word => word[0].toUpperCase() + word.slice(1)
  );
  return titleCaseWords.join(" ");
};

// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first
// array into the second array, in order.
// Begin inserting elements at index n of the second array.
module.exports.frankenSplice = function(arr1, arr2, n) {
  const frankenArr = [];
  const start = arr2.slice(0, n);
  const middle = arr1;
  const end = arr2.slice(n);
  frankenArr.splice(0, arr1.length + arr2.length, ...start, ...middle, ...end);
  return frankenArr;
};

// Remove all falsy values from an array.
module.exports.bouncer = function(arr) {
  return arr.filter(Boolean);
};

// Return the lowest index at which a value (second argument) should be inserted
// into an array (first argument) once it has been sorted. The returned value
// should be a number.
module.exports.getIndexToIns = function(arr, num) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      index++;
    }
  }
  return index;
};

// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.
module.exports.mutation = function(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) return false;
  }
  return true;
};

// Write a function that splits an array (first argument) into groups the length
// of size (second argument) and returns them as a two-dimensional array.
module.exports.chunkArrayInGroups = function(arr, size) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};
