// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;


class ForceUser{
  constructor(name, role, age, forcePoints){
    this.name = name,
    this.role = role,
    this.age = age,
    this.forcePoints = forcePoints
  }
}
// Data

const yoda = new ForceUser('Yoda', 'Jedi Master', 900, 2000)
const darthmaul = new ForceUser('Darth Maul', 'Sith Apprentice', 200, 1200)
const obiwan = new ForceUser('Obi Wan Kenobi', 'Jedi Master', 55, 1500)
const rey = new ForceUser('Rey Skywalker', 'Jedi', 22, 1700)
const darthvader = new ForceUser('Darth Vader', 'Sith Apprentice', 40, 1300)
// const yoda = {
//   name: 'Yoda',
//   role: 'Jedi Master',
//   age: 900,
//   forcePoints: 2000,
// };

// const darthmaul = {
//   name: 'Darth Maul',
//   role: 'Sith Lord',
//   age: 200,
//   forcePoints: 1200,
// };

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// const obiwan = {
//   name: 'Obi Wan Kenobi',
//   role: 'Jedi Master',
//   age:  60,
//   forcePoints: 1500
// }

// const rey = {
//   name: 'Rey Skywalker',
//   role: 'Jedi Master',
//   age: 22,
//   forcePoints: 1700
// }

// YOUR CODE GOES HERE

//

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

app.get('/obiwan', (req, res)=>{
  res.json(obiwan)
})

app.get('/rey', (req, res)=>{
  res.json(rey)
})

app.get('/darthvader', (req, res)=>{
  res.json(darthvader)
})

// YOUR CODE GOES HERE
//
//

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
