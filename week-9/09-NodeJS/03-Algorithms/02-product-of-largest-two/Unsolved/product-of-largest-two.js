// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    if(arr.length < 2){
        alert("Array must contain at least 2 elements");
        return
    }
    let arrayMap = arr.sort((a,b)=>a-b)
    let length = arrayMap.length
    let largestTwo = [arrayMap[length-1], arrayMap[length-2]];
    return largestTwo[0]*largestTwo[1]

};

let arr = [400, 4000, 5, 6]

productOfLargestTwo(arr)