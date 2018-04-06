// Decimal to Binary
// Given an integer in base 10, return its value as a string in binary (aka base 2)
//
// Input: int { Integer }
// Output: { String }
// Example
// Input: 5 => Output: “101”
// Input: 39 => Output: “100111”
// Input: 157 => Output: “10011101”
// Constraints
// Time Complexity: O(log N)
// Auxiliary Space Complexity: O(log N)

//Notes on the solution: You need to find the exponent of the left most binary digit. That probably doesn't make sense...By exponent, I mean the "place". Is the binary digit in the 1s place, the 2s place, the 4s place, etc? Just like in decimal, where "places" can be described as powers of 10, in binary, "places" can be described as powers of 2. So the key to this problem is to find the approapriate place to start with and then, working from left to right, adding the appropriate binary digit to make the conversion.

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
