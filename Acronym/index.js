function parse(phrase) {
  return phrase
    .match(/[A-Z]+[a-z]*|[a-z]+/g)
    .reduce((accum, word) => (accum += word[0].toUpperCase()), "");
}

module.exports = parse;
