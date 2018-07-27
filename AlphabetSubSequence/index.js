// Check whether the given string is a subsequence of the plaintext alphabet.

// Examples
// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

function alphebetSubSequence(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) >= str.charCodeAt(i + 1)) {
      return false;
    }
  }
  return true;
}

module.exports = alphebetSubSequence;
