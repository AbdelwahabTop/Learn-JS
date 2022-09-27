let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

let iter = setOfNumbers.keys();
iter.next().value
iter.next().value

console.log(iter.next().value)
