//Notes on the solution: You need to find the exponent of the left most binary
//digit. That probably doesn't make sense...By exponent, I mean the "place".
//Is the binary digit in the 1s place, the 2s place, the 4s place, etc?
//Just like in decimal, where "places" can be described as powers of 10,
//in binary, "places" can be described as powers of 2. So the key to this
//problem is to find the approapriate place to start with and then, working
//from left to right, adding the appropriate binary digit to make the conversion.

function toBinary(int) {
  let exponent = 0;
  let result = "";
  while (Math.pow(2, exponent) * 2 < int) {
    exponent++;
  }
  while (int > 0) {
    let num = Math.pow(2, exponent);
    if (num <= int) {
      result += "1";
      int -= num;
    } else {
      result += "0";
    }
    exponent--;
  }
  return result;
}
