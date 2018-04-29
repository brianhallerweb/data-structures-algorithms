function anagrams(stringA, stringB) {
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

function anagrams(stringA, stringB) {
  return (
    stringA
      .toLowerCase()
      .match(/\w/g)
      .sort()
      .join("") ===
    stringB
      .toLowerCase()
      .match(/\w/g)
      .sort()
      .join("")
  );
}
