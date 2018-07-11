const missingNumber = require("./index");

const randomNum = Math.floor(Math.random() * 100);

describe("missingNumber", () => {
  it("should return the missing number", () => {
    let randomNum = Math.floor(Math.random() * 100);
    let array = [];
    for (let i = 100; i > 0; i--) {
      if (i !== randomNum) {
        array.push(i);
      }
    }
    expect(missingNumber(array)).toBe(randomNum);
  });
});
