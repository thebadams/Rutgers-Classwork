
console.log(this); //Console Logs the window ojbect

// declares a function called helloThis
function helloThis() {
  console.log('Inside this function, this is ' + this); //Console Logs "Inside this function, this is [whatever object the function is running in]"
}
// ceclares an object, child
var child = {
  age: 10, //sets value of age to 10
  ageTenYears: function () { //ageTenYears is a method that logs the age of the child in 10 years
    console.log(this.age + 10); //console log message
  },
};
//declares an object, investor
var investor = {
  name: 'Cash Saver', //sets name of investor to "Cash Saver"
  investment: { //sets investment as an object
    initialInvestment: 5000, //sets the this.investment.initialInvestment to 5000
    investmentGrowth: function () { //defines this.investment.ivestmentGrowth as a function that console logs
      console.log(this.initialInvestment * 1.15); //console logs the 5000*1.15
      return this.initialInvestment*1.15;
    },
  },
};
