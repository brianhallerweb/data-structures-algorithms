function unique(arr) {
  const uniqueEls = new Set();
  for (let num of arr) {
    uniqueEls.add(num);
  }
  return [...uniqueEls];
}

//alternative solution for unique
function unique(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = null;
  }
  return Object.keys(obj).map(key => Number(key));
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

// a more manual solution
function missingNumber(n, arr) {
  const missingNumbers = [];
  let sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr[0] !== 1) {
    missingNumbers.push(1);
  }
  for (let i = 0; i < n - 2; i++) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      sortedArr.splice(i + 1, 0, sortedArr[i] + 1);
      missingNumbers.push(sortedArr[i] + 1);
    }
  }
  if (sortedArr[sortedArr.length - 1] !== n) {
    missingNumbers.push(n);
  }
  return missingNumbers;
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
      results.push(Number(key));
    }
  }
  return results;
}

function anagramPair(string1, string2) {
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
}

function anagramPalindrome(string) {
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
}
