// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let chars = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char in chars){
            chars[char]++
        } else {
            chars[char] = 1
        }
        console.log(chars)
    }
    return chars;
};

characterCount(str);
