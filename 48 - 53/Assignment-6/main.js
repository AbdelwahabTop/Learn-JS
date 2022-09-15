let start = 0;
let swappedName = "elZerO";

let s = [];

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] !== swappedName[i].toUpperCase()) {
        s.push(swappedName[i].toUpperCase());
        continue;
    }
    s.push(swappedName[i].toLowerCase());
}
console.log(s.join(""));



// Output
"ELzERo"