let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr1 = [arrTwo[2], arrOne[2], arrOne[1], arrOne[0], arrTwo[1], arrTwo[0]];
let finalArr2 = []

// Write One Single Line Of Code
finalArr2 = arrOne.concat(arrTwo).sort().reverse()

console.log(finalArr2); // ["Z", "X", "D", "C", "B", "A"]
console.log(finalArr1); // ["Z", "X", "D", "C", "B", "A"]