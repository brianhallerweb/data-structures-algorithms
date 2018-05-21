function unique(arr) {
  const uniqueEls = new Set();
  for (let num of arr) {
    uniqueEls.add(num);
  }
  return [...uniqueEls];
}

//alternative solution for unique
function unique(arr) {
  const objMap = {};
  for (let i of arr) {
    if (!objMap[i]) {
      objMap[i] = 1;
    }
  }
  const stringsArr = Object.keys(objMap);
  const intsArr = stringsArr.map(string => parseInt(string));
  return intsArr;
}

function wordCount(sentence) {
  sentence = sentence
    .toLowerCase()
    .replace(/[^\w ]/g, "")
    .split(" ");
  const hash = {};
  for (let word of sentence) {
    if (hash[word]) {
      hash[word]++;
    } else if (word) {
      hash[word] = 1;
    }
  }
  return hash;
}

//a functional approach to wordCount
function wordCount(sentence) {
  sentence = sentence
    .toLowerCase()
    .replace(/[^\w ]/g, "")
    .split(" ");
  return sentence.reduce((acc, word) => {
    const count = acc[word] || 0;
    return { ...acc, [word]: count + 1 };
  }, {});
}

function rgb(string) {
  const rgb = [0, 0, 0];
  for (let letter of string) {
    if (letter === "r") {
      rgb[0]++;
    } else if (letter === "g") {
      rgb[1]++;
    } else {
      rgb[2]++;
    }
  }
  return Math.min(...rgb);
}

function missingNumber(n, arr) {
  const set = new Set();
  for (let i = 1; i <= n; i++) {
    set.add(i);
  }
  for (let el of arr) {
    set.delete(el);
  }
  return [...set];
}

function letterSort(string) {
  return string
    .split("")
    .sort()
    .join("");
}

function characterMode(string) {
  string = string.toLowerCase().replace(/[^\w]/g, "");
  const hash = {};
  for (let letter of string) {
    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }
  let mostFrequentCount = 0;
  let mostFrequentLetter;
  for (let letter in hash) {
    if (hash[letter] > mostFrequentCount) {
      mostFrequentCount = hash[letter];
      mostFrequentLetter = letter;
    } else if (hash[letter] === mostFrequentCount) {
      mostFrequentLetter += letter;
    }
  }
  return mostFrequentLetter;
}

function sortDigits(n) {
  let num = n;
  let result = 0;
  for (let i = 1; i <= 9; i++) {
    while (num > 0) {
      if (num % 10 === i) {
        result = result * 10;
        result += i;
      }
      num = Math.floor(num / 10);
    }
    num = n;
  }
  return result;
}

function getDuplicates(arr) {
  const objMap = {};
  for (let el of arr) {
    if (objMap[el]) {
      objMap[el]++;
    } else {
      objMap[el] = 1;
    }
  }
  const results = [];
  for (let key in objMap) {
    if (objMap[key] > 1) {
      results.push(parseInt(key));
    }
  }
  return results;
}

function anagramPair(string1, string2) {
  if (string1.length !== string2.length) return false;
  const objMap1 = {};
  for (let letter of string1) {
    if (objMap1[letter]) {
      objMap1[letter]++;
    } else {
      objMap1[letter] = 1;
    }
  }
  const objMap2 = {};
  for (let letter of string2) {
    if (objMap2[letter]) {
      objMap2[letter]++;
    } else {
      objMap2[letter] = 1;
    }
  }
  for (let letter in objMap1) {
    if (objMap1[letter] !== objMap2[letter]) {
      return false;
    }
  }
  return true;
}

function anagramPalindrome(string) {
  const objMap = {};
  for (let letter of string) {
    objMap[letter] ? objMap[letter]++ : (objMap[letter] = 1);
  }
  let oddCounter = 0;
  for (let key in objMap) {
    if (objMap[key] % 2) oddCounter++;
  }
  if (oddCounter === 1 && string.length % 2) return true;
  if (oddCounter === 0 && !string.length % 2) return true;
  return false;
}
