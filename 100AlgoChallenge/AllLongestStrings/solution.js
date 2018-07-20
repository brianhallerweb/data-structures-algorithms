function allLongestStrings(strings) {
  const longestStringsArr = [];
  let longestLength = 0;
  for (str of strings) {
    if (str.length >= longestLength) {
      longestLength = str.length;
    }
  }
  for (str of strings) {
    if (str.length === longestLength) {
      longestStringsArr.push(str);
    }
  }
  return longestStringsArr;
}
