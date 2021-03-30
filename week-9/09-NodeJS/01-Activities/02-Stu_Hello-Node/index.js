function sayString(string) {
    if(typeof(string)!== 'string'){
        console.log("Please Input a String")
        return
    };
    return console.log(string)
    
};

let string = "Hello, NODE!"

sayString(string)