class car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return "Car Is Running Now";
    }
    stop() {
        return "Car Is Running Now";
    }
}

let ferieri = new car("ferieri", "2021", "800,000$");
let Lambr = new car("lamber", "2022", "1000,000$");
let fyat = new car("fyat", "1850", "10,000$");

console.log(`car one Name is ${ferieri.n} And Model Is ${ferieri.m} And Price Is ${ferieri.p}`);
console.log(fyat.run())
  // Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"