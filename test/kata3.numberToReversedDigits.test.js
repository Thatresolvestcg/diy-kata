const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(2333)).toBe(3332);
    expect(numberToReversedDigits(42833)).toBe(33824);
    expect(numberToReversedDigits(9999)).toBe(9999);
  });
});






// describe("booleanToWord", () => {
//   test("returns YES when passed true", () => {
//     expect(booleanToWord(true)).toBe("Yes");
//   })
//   test("returns NO when passed false", () => {
//     expect(booleanToWord(false)).toBe("No");
//   })
// });