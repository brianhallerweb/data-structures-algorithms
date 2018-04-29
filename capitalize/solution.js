// function capitalize(str) {
//   let array = str.split(" ");
//
//   let capArr = array.map(el => el[0].toUpperCase() + el.substring(1));
//
//   return capArr.join(" ");
// }

function capitalize(str) {
  let capStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }
  return capStr;
}
