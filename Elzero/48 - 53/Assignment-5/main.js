let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

letter = letter.toUpperCase()
let a = letter.length
let b = --letter.length


for (let i = --a; i < friends.length; i++) {
    if (friends[i][b] != letter) {
        console.log(`${a} => ${friends[i]}`)
    }
    ++a
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"