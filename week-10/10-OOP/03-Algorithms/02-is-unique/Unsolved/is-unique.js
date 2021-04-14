// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let arrayObj = {};
    for(let i = 0; i< arr.length; i++){
        let currentEl = arr[i]
        if(arrayObj[currentEl]){
            return false
        }
        arrayObj[currentEl] = true
    }
    return true
};
