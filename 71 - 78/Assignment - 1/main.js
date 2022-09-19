let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let elzero = mix.map(function (el) {
    return isNaN(parseInt(el)) ? el : "";
}).join("");

console.log(elzero);

// Elzero