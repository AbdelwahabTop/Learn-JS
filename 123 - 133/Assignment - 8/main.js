let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

n2.shift();
let b = new Set ().add(...n2);
let c = [...b.keys().next().value.toString()].shift();
n2.shift().toString();
n2.unshift(c);
console.log(+n2.join(""));
// Needed Output
// 210