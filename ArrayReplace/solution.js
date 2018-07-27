function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(
    num => (num === elemToReplace ? substitutionElem : num)
  );
}
