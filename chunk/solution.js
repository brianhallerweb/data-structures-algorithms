// function chunk(array, size) {
//   let finalArr = [];
//   while (array.length > 0) {
//     let innerArr = [];
//     for (i = 0; i < size; i++) {
//       if (array.length > 0) {
//         innerArr.push(array.shift());
//       }
//     }
//     finalArr.push(innerArr);
//   }
//   return finalArr;
// }

// function chunk(array, size) {
//   let chunked = [];
//   for (let el of array) {
//     if (chunked.length === 0 || chunked[chunked.length - 1].length === size) {
//       chunked.push([el]);
//     } else {
//       chunked[chunked.length - 1].push(el);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }
  return chunked;
}

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
