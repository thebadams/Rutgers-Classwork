const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a reversed version of a passed string", ()=>{
      const str = "hello world!"
      const rev = "!dlrow"
      const result = new Algo().reverse(str)

      expect(result).toEqual(rev)
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should take a string as an argument and return a boolean true if provided string is a palindrome", ()=>{
      const str = "racecar"
      const result = new Algo().isPalindrome(str)

      expect(result).toEqual(true)
    })
    it("should return false if the string is not a palindrome", ()=>{
      const str = "neon";
      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should take a string as an arguement and return a new string with the first letter of each word is capitalized", ()=>{
      const str = "capitalize every first word of the string."
      const cap = "Capitalize Every First Word Of The String."

      const result = new Algo().capitalize(str)
      expect(result).toEqual(cap)
    })
  });
});
