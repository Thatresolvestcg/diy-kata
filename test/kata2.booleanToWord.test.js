const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns YES when passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  })
  test("returns NO when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  })
});