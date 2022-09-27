let theName = "Elzero";

let a = theName.split("");
console.log(a);

let b = [...new Set (theName)];
console.log(b);

let c = Array.from(theName);
console.log(c);

let d = Array(...theName);
console.log(d);

let e = [...theName];
console.log(e);
// co
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']