let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let a = friends[counter][counter]
let b = --a.length



while (index < friends.length) {
    index++;
    if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
        ++counter
        console.log(`${counter} => ${friends[index]}`);
    } 
}
// Output
"1 => Sayed"
"2 => Mahmoud"


