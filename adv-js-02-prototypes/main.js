// Prototypal inheritance and prototypal chain

// ES6 introduced classes, a modern way to construct objects
// In js, prototypal inheritance and prototypal chain work as:
// - "Under the hood", (ES6 classes are considered "syntactic sugar")

// Object literals
const person = {
  alive: true
};

const musician = {
  plays: true
}

// musician.__proto__ = person;

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person)

console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);

if (Object.getPrototypeOf(musician) === musician.__proto__) {
  console.log("Truely matched!!");
}

// Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);

// THINGS TO REMEMBER
// 1. No circular references are allowed (person.__proto__ can't be guitarist)
// 2. The __proto__ value must be an object or null.;
// 3. An object can only inherit from an object.

// Objects with getter and setter methods
const car = {
  doors: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
};

const luxury_car = {};

Object.setPrototypeOf(luxury_car, car);
luxury_car.seatMaterial = "leather";
console.log(luxury_car);

// walking up the prototype chain - props and methods are not copied
console.log(luxury_car.valueOf());

// Get the keys of an object
console.log(Object.keys(luxury_car)); // returns an array

// loop through each object key
Object.keys(luxury_car).forEach(key => {
  console.log(key); // returns plain object key
})

// loop through and get all inherited props
for (let key in luxury_car) {
  console.log(key);
}

// object constructors
function Animal(specis) {
  this.specis = specis;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `A ${this.specis} is walking!`;  
}

const Bear = new Animal("bear");

console.log(Bear.specis);
console.log(Bear.walks());

// The prototype property is where inheritable peops and methods reside.
console.log(Bear.__proto__);
console.log(Animal.prototype);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Bear);

