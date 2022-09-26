let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if (chosen === 1) {
    const {title:t, age:a, available:w, skills: [,last]} = myFriends[0];
    console.log(t)
    console.log(a)
    console.log(w ==true ? "Available" : "not Available")
    console.log(last)
} else if (chosen === 2) {
    const {title:t, age:a, available:w, skills: [,last]} = myFriends[1];
    console.log(t)
    console.log(a)
    console.log(w ==true ? "Available" : "not Available")
    console.log(last)
} else if (chosen === 3) {
    const {title:t, age:a, available:w, skills: [,last]} = myFriends[2];
    console.log(t)
    console.log(a)
    console.log(w ==true ? "Available" : "not Available")
    console.log(last)
} 



/*
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/