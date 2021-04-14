// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    if(strA.length !== strB.length){
        return false
    }
    let strAArray = strA.split("")
    strAArray.sort((a,b=>a-b))
    let strBArray = strB.split("")
    strBArray.sort((a,b=>a-b))
    for(let i = 0; i < strAArray.length; i++){
        if(strAArray[i]!==strBArray[i]){
            return false
        }
    }
    return true
};
