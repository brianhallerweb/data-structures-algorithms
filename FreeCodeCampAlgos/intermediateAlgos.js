// We'll pass you an array of two numbers. Return the sum of
// those two numbers plus the sum of all the numbers between them.
module.exports.sumAll = function(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
};

module.exports.diffArray = function(arr1, arr2) {
  const uniqueArr1 = arr1.filter(el => !arr2.includes(el));
  const uniqueArr2 = arr2.filter(el => !arr1.includes(el));
  return [...uniqueArr1, ...uniqueArr2];
};

module.exports.destroyer = function(arr) {
  const args = [...arguments].slice(1);
  return arr.filter(el => !args.includes(el));
};

module.exports.whatIsInAName = function(collection, source) {
  var srcKeys = Object.keys(source);
  return collection.filter(obj => {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
};

module.exports.spinalCase = function(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/[ -_]/)
    .join("-");
};
