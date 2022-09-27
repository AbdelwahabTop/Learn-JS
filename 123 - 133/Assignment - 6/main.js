let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.copyWithin(3))
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// -----------------------------------
let char = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(char.copyWithin(-2, 4, 6).copyWithin(3, 4, 5).copyWithin(4, 0, 3));
// Needed Output
//         ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// -----------------------------------
let cha = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(cha.copyWithin(-3, 2, 5).copyWithin(2, 0, 2));
// Needed Output
["Z", "Y", "Z", "Y", "A", "D", "E"]

// -----------------------------------
let ch = ["A", "B", "C", "D", "E", 10, 15, 6];
let c = [...ch.filter((x) => typeof x === "number"), ...ch.filter((x) => typeof x === "string")] 
console.log(c);

// ----------------------------------
console.log(c.copyWithin(0, 3, 6));