/*
 *  Problem:  Powerset
 *
 *  Prompt:   Given a set S, return the powerset P(S), which is
 *            a set of all subsets of S.
 *
 *  Input:    A String
 *  Output:   An Array of Strings representing the power set of the input
 *
 *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
 *
 *  Note:     The input string will not contain duplicate characters
 *            The letters in the subset string must be in the same order
 *            as the original input.
 */

// My thoughts about the solution: The hardest part of this problem is seeing the recursive call. Noticing that the power set is creating by either adding or not adding to the existing string is a very difficult insight. The base case is also a little tricky to see but I think it makes sense when you visualize the recursion as a tree. The build (subset) needs to be pushed into the results array when depth === str.length.

function powerset(str) {
  let result = [];

  function traverse(build, depth) {
    if (depth === str.length) {
      result.push(build);
      return;
    }

    traverse(build, depth + 1);
    traverse(build + str[depth], depth + 1);
  }
  traverse("", 0);

  return result;
}
