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
