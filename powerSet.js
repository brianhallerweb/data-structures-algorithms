// A power set is the set of all subsets.

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
