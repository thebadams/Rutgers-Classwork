var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
//Add "Canis Major" to the array constellations
constellations.unshift("Canis Major");

// Remove "Venus" from the array planets
planets.pop();

// Join planets and constellations to create a new array, galaxy
var galaxy = constellations.concat(planets);

// convert star to uppercase

var uppercaseStar = star.toUpperCase();