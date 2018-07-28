const ba = require("./basicAlgos");

describe("free code camp basic algorithms", () => {
  test("convertToF", () => {
    expect(ba.convertToF(0)).toBe(32);
    expect(ba.convertToF(5)).toBe(41);
    expect(ba.convertToF(-5)).toBe(23);
  });

  test("reverseString", () => {
    expect(ba.reverseString("test")).toBe("tset");
    expect(ba.reverseString("abcde")).toBe("edcba");
    expect(ba.reverseString("something")).toBe("gnihtemos");
  });

  test("factorialize", () => {
    expect(ba.factorialize(5)).toBe(120);
    expect(ba.factorialize(0)).toBe(1);
    expect(ba.factorialize(10)).toBe(3628800);
  });

  test("findLongestWordLength", () => {
    expect(
      ba.findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
    expect(ba.findLongestWordLength("May the force be with you")).toBe(5);
    expect(
      ba.findLongestWordLength(
        "What if we try a super-long word such as otorhinolaryngology"
      )
    ).toBe(19);
  });

  test("largestOfFour", () => {
    expect(
      ba.largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ])
    ).toEqual([27, 5, 39, 1001]);
    expect(
      ba.largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1]
      ])
    ).toEqual([9, 35, 97, 1000000]);
    expect(
      ba.largestOfFour([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10]
      ])
    ).toEqual([25, 48, 21, -3]);
  });

  test("confirmEnding", () => {
    expect(ba.confirmEnding("Bastian", "n")).toBe(true);
    expect(ba.confirmEnding("Congratulation", "on")).toBe(true);
    expect(ba.confirmEnding("Connor", "n")).toBe(false);
  });

  test("repeatStringNumTimes", () => {
    expect(ba.repeatStringNumTimes("*", 3)).toBe("***");
    expect(ba.repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
    expect(ba.repeatStringNumTimes("abc", -2)).toBe("");
  });

  test("truncateString", () => {
    expect(
      ba.truncateString("A-tisket a-tasket A green and yellow basket", 8)
    ).toBe("A-tisket...");
    expect(
      ba.truncateString(
        "A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length + 2
      )
    ).toBe("A-tisket a-tasket A green and yellow basket");
    expect(ba.truncateString("A-", 1)).toBe("A...");
  });

  test("findElement", () => {
    expect(
      ba.findElement([1, 3, 5, 8, 9, 10], function(num) {
        return num % 2 === 0;
      })
    ).toBe(8);

    expect(
      ba.findElement([1, 3, 5, 9], function(num) {
        return num % 2 === 0;
      })
    ).toBe(undefined);
  });

  test("booWho", () => {
    expect(ba.booWho(false)).toBe(true);

    expect(ba.booWho([1, 2, 3])).toBe(false);

    expect(ba.booWho([])).toBe(false);
  });

  test("titleCase", () => {
    expect(ba.titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");

    expect(ba.titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");

    expect(ba.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
      "Here Is My Handle Here Is My Spout"
    );
  });

  test("frankenSplice", () => {
    expect(ba.frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);

    expect(ba.frankenSplice([1, 2], ["a", "b"], 1)).toEqual(["a", 1, 2, "b"]);

    expect(
      ba.frankenSplice(
        ["claw", "tentacle"],
        ["head", "shoulders", "knees", "toes"],
        2
      )
    ).toEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
  });

  test("bouncer", () => {
    expect(ba.bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);

    expect(ba.bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);

    expect(ba.bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });

  test("getIndexToIns", () => {
    expect(ba.getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);

    expect(ba.getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);

    expect(ba.getIndexToIns([40, 60], 50)).toBe(1);
  });

  test("mutation", () => {
    expect(ba.mutation(["hello", "hey"])).toBe(false);

    expect(ba.mutation(["hello", "Hello"])).toBe(true);

    expect(ba.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
  });

  test("mutation", () => {
    expect(ba.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"]
    ]);

    expect(ba.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5]
    ]);

    expect(ba.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5]
    ]);
  });
});
