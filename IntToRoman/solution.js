function intToRoman(int) {
  let roman = "";
  const ints = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const roms = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M"
  ];

  while (int > 0) {
    let i = 0;
    while (int / ints[i] >= 1) {
      i++;
    }
    roman += roms[i - 1];
    int -= ints[i - 1];
  }

  return roman;
}
