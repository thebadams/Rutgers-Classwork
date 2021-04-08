// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      if(inRange(input, 90, 100)){
        response = "A"
      } else if(inRange(input, 80, 89)){
        response = "B"
      } else if(inRange(input, 70,79)) {
        response = "C"
      } else if(inRange(input, 60, 69)){
        response = "D"
      } else {
        response = "C"
      }
  
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      switch(input){
        case "A":
          response = "90-100";
          break;
        case "B":
          response = "80-89";
          break;
        case "C":
          response = "70-79";
          break;
        case "D":
          response = "60-69";
          break;
        default:
          response = "0-69";

      }
      
    }
    return response
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
console.log(John.displayGrade("F"))
