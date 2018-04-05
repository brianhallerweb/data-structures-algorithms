// function lp(m, n) {
//   let cache = {};
//
//   function traverse(x, y) {
//     let key = x + "_" + y;
//     if (cache[key] !== undefined) {
//       return cache[key];
//     } else if (x === n && y === m) {
//       return 1;
//     } else if (x > n || y > m) {
//       return 0;
//     }
//     //                 1
//     cache[key] = traverse(x + 1, y) + traverse(x, y + 1);
//     console.log(cache);
//     return cache[key];
//   }
//
//   return traverse(0, 0);
// }
//
// console.log(lp(1, 1));
//
//
//
// function lp(m, n) {
//   let cache = {};
//
//   function traverse(x, y) {
//     let key = x + "_" + y;
//     if (cache[key] !== undefined) {
//       return cache[key];
//     } else if (x === n && y === m) {
//       return 1;
//     } else if (x > n || y > m) {
//       return 0;
//     }
//     //                 1                 1
//     cache[key] = traverse(x + 1, y) + traverse(x, y + 1);
//     console.log(cache);
//     return cache[key];
//   }
//
//   return traverse(0, 0);
// }
//
//
//
//
// [(0,0)]
//
//
// {'1_0': 1
//  '0_1': 1
//  '0_0': 2
// }
//
//
// .(0,0)---   .(1,0)    (2,0).
// |           |
// |           |
// |           |
// |           |
// .(0,1)---   .(1,1)
//
//
//
// .(0,2)
