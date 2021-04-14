class Character {
  // TODO: Add a constructor
  constructor(name, strength, hitpoints){
    this.name = name,
    this.strength = strength,
    this.hitpoints = hitpoints
  }
  // TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`
  printStats(){
    const {name, strength, hitpoints} = this;
    console.log(`$My name is ${name}, I have ${strength} strength, and ${hitpoints} HP`)
  }
  // TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
  isAlive(){
    const {hitpoints} = this;
    return hitpoints<= 0
  }
  // TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
  attack(opponent){
    const {hitpoints} = opponent;
    const {strength} = this;
    hitpoints = hitpoints - strength
    return opponent.isAlive()
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);