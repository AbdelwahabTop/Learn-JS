/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let manegars = []
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
    manegars.push(myAdmins[i])
}
console.log(manegars);
let count = 1;

document.write(`<div>We Have ${manegars.length} Admins</div>`);

for (let i = 0; i < manegars.length; i++) {
  document.write(`<div>`);
    document.write(`<P>The Admin for Team ${i+1} Is ${manegars[i]}</P>`)
    document.write(`<h2>Team Members:</h2>`)
    for (let j = 0; j < myEmployees.length; j++) {
      if (myEmployees[j].startsWith(manegars[i][0])) {
        document.write(`- ${count} ${myEmployees[j]}<br><br>`)
        count++
      }
    }
    count = 1
  document.write(`</div>`);
  document.write(`<hr>`);
}

