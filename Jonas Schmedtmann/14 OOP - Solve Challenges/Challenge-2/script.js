"use strict";

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this._speed += 10;
    console.log(`${this.make} is going at ${this.speed} mi/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  };

  get speedUS() {
    return this.speed / 1.6;
  };

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new Car("Ford", 120);

console.log(Ford.speedUS);
Ford.accelerate();
