class Vehicle {
  constructor() {
    this.wheels = 4,
    this.motorized = true
  }

  ready() {
    return "Ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2;
  }

  wheelie() {
    return "On rear single wheel now!";
  }
}

const ducati_01 = new Motorcycle();

console.log(ducati_01);
console.log(ducati_01.wheels);
console.log(ducati_01.ready());
console.log(ducati_01.wheelie());

const ford_01 = new Vehicle()
console.log(ford_01);

