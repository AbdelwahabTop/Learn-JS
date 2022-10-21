'use strict'

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.break = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
}

const feat = new Car('feat', 10);
console.log(feat);
feat.accelerate();
feat.accelerate();
feat.accelerate();
feat.break();