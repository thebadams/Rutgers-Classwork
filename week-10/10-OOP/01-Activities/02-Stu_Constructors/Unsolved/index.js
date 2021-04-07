// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name,
    this.tech = tech,
    this.introduction = function(){
        console.log(`Hello, my name is ${this.name}, and my favorite tech is ${this.tech}`)
    }
    
}

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const brian = new Developer("Brian", "JavaScript");
const juan = new Developer("Juan", "Phones");

// TODO: Call the 'introduction()' method on the new object
brian.introduction();
juan.introduction();