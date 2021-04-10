function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  const characterArray = str.split('');
  const reverseArray = [];
  characterArray.forEach((el)=>reverseArray.unshift(el));
  const reverseString = reverseArray.join("");
  return reverseString;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
 const reverseString = this.reverse(str)
 return reverseString === str;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
  let stringArray = str.split(" ");
   for(let i = 0; i < stringArray.length; i++){
    //    let el = stringArray[i]
       stringArray[i] = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase());
   }
   return stringArray.join(" ");
};

module.exports = Algo;
