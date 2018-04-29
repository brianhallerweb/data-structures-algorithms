const anagrams = require("./index");

describe("anagrams", () => {
  it("should throw an error if both inputs are not strings", () => {
    expect(() => anagrams(1, "something")).toThrow();
  });
  it("should return true when input strings are anagrams", () => {
    const result = anagrams("abc", "abc");
    expect(result).toBe(true);
  });
  it("should return true when input strings are anagrams after spaces, capitals, and punctuation are removed", () => {
    const result = anagrams("a bc,.''", "aB,,,  c");
    expect(result).toBe(true);
  });
});
