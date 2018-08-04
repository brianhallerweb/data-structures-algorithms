const ia = require("./intermediateAlgos");

describe("free code camp intermediate algorithms", () => {
  test("sumAll", () => {
    expect(ia.sumAll([1, 4])).toBe(10);
    expect(ia.sumAll([4, 1])).toBe(10);
    expect(ia.sumAll([5, 10])).toBe(45);
  });
  test("diffArray", () => {
    expect(
      ia.diffArray(["wool", "dead shrub"], ["wool", "dead shrub"])
    ).toEqual([]);
    expect(
      ia.diffArray(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
      )
    ).toEqual(["pink wool"]);
    expect(
      ia.diffArray(
        ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
      )
    ).toEqual(["pink wool", "diorite"]);
  });
  test("destroyer", () => {
    expect(ia.destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
    expect(ia.destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
    expect(ia.destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
  });

  test("whatIsInAName", () => {
    expect(
      ia.whatIsInAName(
        [
          { first: "Romeo", last: "Montague" },
          { first: "Mercutio", last: null },
          { first: "Tybalt", last: "Capulet" }
        ],
        { last: "Capulet" }
      )
    ).toEqual([{ first: "Tybalt", last: "Capulet" }]);
    expect(
      ia.whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
        apple: 1
      })
    ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
    expect(
      ia.whatIsInAName(
        [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, bat: 2 }
      )
    ).toEqual([{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]);
  });

  test("spinalCase", () => {
    expect(ia.spinalCase("thisIsSpinalTap")).toBe("this-is-spinal-tap");
    expect(ia.spinalCase("The_Andy_Griffith_Show")).toBe(
      "the-andy-griffith-show"
    );
    expect(ia.spinalCase("Teletubbies say Eh-oh")).toBe(
      "teletubbies-say-eh-oh"
    );
  });
});
