const fc = require("./index");

describe("unique", () => {
  it("should remove duplicates", () => {
    expect(fc.unique([1, 2, 4, 4, 5, 6])).toEqual([1, 2, 4, 5, 6]);
    expect(fc.unique([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(fc.unique([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
  });
});

describe("wordCount", () => {
  it("should count words", () => {
    expect(fc.wordCount("The cat and the hat.")).toEqual({
      the: 2,
      cat: 1,
      and: 1,
      hat: 1
    });
    expect(fc.wordCount("As soon as possible.")).toEqual({
      as: 2,
      soon: 1,
      possible: 1
    });
    expect(fc.wordCount("It's a man, it's a plane, it's superman!")).toEqual({
      its: 3,
      a: 2,
      man: 1,
      plane: 1,
      superman: 1
    });
  });
});

describe("rgb", () => {
  it("determine the number of complete sets of 'rgb'", () => {
    expect(fc.rgb("rgbrgb")).toBe(2);
  });
  it("determine the number of complete sets of 'rgb'", () => {
    expect(fc.rgb("rbgrbrgrgbgrrggbbbbrgrgrgrg")).toBe(7);
  });
  it("determine the number of complete sets of 'rgb'", () => {
    expect(fc.rgb("bbrr")).toBe(0);
  });
});

describe("missingNumber", () => {
  it("return an array of missing values", () => {
    expect(fc.missingNumber(4, [1, 4, 2])).toEqual([3]);
  });
  it("return an array of missing values", () => {
    expect(fc.missingNumber(8, [4, 7, 1, 6])).toEqual([2, 3, 5, 8]);
  });
  it("return an array of missing values", () => {
    expect(fc.missingNumber(6, [6, 4, 2, 1])).toEqual([3, 5]);
  });
  it("return an array of missing values", () => {
    expect(fc.missingNumber(6, [5, 4, 2, 1])).toEqual([3, 6]);
  });
  it("return an array of missing values", () => {
    expect(fc.missingNumber(6, [6, 4, 2, 3])).toEqual([1, 5]);
  });
});

describe("letterSort", () => {
  it("it should sort letters alphabetically", () => {
    expect(fc.letterSort("hello")).toBe("ehllo");
  });
  it("it should sort letters alphabetically", () => {
    expect(fc.letterSort("whiteboard")).toBe("abdehiortw");
  });
  it("it should sort letters alphabetically", () => {
    expect(fc.letterSort("one")).toBe("eno");
  });
});

describe("characterMode", () => {
  it("it should a string of the most frequently occuring letters", () => {
    expect(fc.characterMode("hello")).toBe("l");
  });
  it("it should a string of the most frequently occuring letters", () => {
    expect(fc.characterMode("A walk in the park")).toBe("a");
  });
  it("it should a string of the most frequently occuring letters", () => {
    expect(fc.characterMode("noon")).toBe("no");
  });
});

describe("sortDigits", () => {
  it("should sort the digits of an integer", () => {
    expect(fc.sortDigits(8970)).toBe(789);
  });
  it("should sort the digits of an integer", () => {
    expect(fc.sortDigits(32445)).toBe(23445);
  });
  it("should sort the digits of an integer", () => {
    expect(fc.sortDigits(10101)).toBe(111);
  });
});

describe("getDuplicates", () => {
  it("should return an array of duplicates", () => {
    expect(fc.getDuplicates([1, 2, 4, 2])).toEqual([2]);
  });
  it("should return an array of duplicates", () => {
    expect(fc.getDuplicates([3, 2, 3, 2, 3, 3, 4])).toEqual([2, 3]);
  });
  it("should return an array of duplicates", () => {
    expect(fc.getDuplicates([1, 2, 3, 4])).toEqual([]);
  });
});

describe("anagramPair", () => {
  it("should check if two strings are anagrams", () => {
    expect(fc.anagramPair("cat", "act")).toBe(true);
  });
  it("should check if two strings are anagrams", () => {
    expect(fc.anagramPair("cat", "dog")).toBe(false);
  });
  it("should check if two strings are anagrams", () => {
    expect(fc.anagramPair("racecar", "aaccrres")).toBe(false);
  });
});

describe("anagramPalindrome", () => {
  it("should check if a string can be rearranged to form a palindrome", () => {
    expect(fc.anagramPalindrome("carrace")).toBe(true);
  });
  it("should check if a string can be rearranged to form a palindrome", () => {
    expect(fc.anagramPalindrome("cat")).toBe(false);
  });
  it("should check if a string can be rearranged to form a palindrome", () => {
    expect(fc.anagramPalindrome("aaaaaabbbbbbccd")).toBe(true);
  });
});
