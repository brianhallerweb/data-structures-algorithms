const fc = require("./index");

describe("unique", () => {
  it("should be a function", () => {
    expect(typeof fc.unique).toBe("function");
  });
  it("should remove duplicates", () => {
    expect(fc.unique([1, 2, 4, 4, 5, 6])).toEqual([1, 2, 4, 5, 6]);
    expect(fc.unique([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(fc.unique([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
  });
});

describe("wordCount", () => {
  it("should be a function", () => {
    expect(typeof fc.wordCount).toBe("function");
  });
});

describe("rgb", () => {
  it("should be a function", () => {
    expect(typeof fc.rgb).toBe("function");
  });
});

describe("missingNumber", () => {
  it("should be a function", () => {
    expect(typeof fc.missingNumber).toBe("function");
  });
});

describe("letterSort", () => {
  it("should be a function", () => {
    expect(typeof fc.letterSort).toBe("function");
  });
});

describe("characterMode", () => {
  it("should be a function", () => {
    expect(typeof fc.characterMode).toBe("function");
  });
});

describe("sortDigits", () => {
  it("should be a function", () => {
    expect(typeof fc.sortDigits).toBe("function");
  });
});

describe("getDuplicates", () => {
  it("should be a function", () => {
    expect(typeof fc.getDuplicates).toBe("function");
  });
});

describe("anagramPair", () => {
  it("should be a function", () => {
    expect(typeof fc.anagramPair).toBe("function");
  });
});

describe("anagramPalindrome", () => {
  it("should be a function", () => {
    expect(typeof fc.anagramPalindrome).toBe("function");
  });
});
