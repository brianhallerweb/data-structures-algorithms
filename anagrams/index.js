// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (typeof stringA !== "string" || typeof stringB !== "string") {
    throw new Error("input must be a string");
  }
  function objectMap(str) {
    obj = {};
    for (let char of str.toLowerCase().match(/\w/g)) {
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  }
  let objA = objectMap(stringA);
  let objB = objectMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
