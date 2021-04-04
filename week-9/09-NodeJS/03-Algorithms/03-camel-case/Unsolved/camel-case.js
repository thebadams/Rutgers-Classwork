// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
   let stringArray = str.split(" ");

   stringArray[0] = stringArray[0].toLowerCase();
   for(let i = 1; i < stringArray.length; i++){
    //    let el = stringArray[i]
       stringArray[i] = stringArray[i].replace(stringArray[i].charAt(0), stringArray[i].charAt(0).toUpperCase());
   }
   return stringArray.join("");
};

camelCase("The quick brown fox");
