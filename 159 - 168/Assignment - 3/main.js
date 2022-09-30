// Needed Output
let date = new Date();
date.setDate(0);
console.log(date);
let months =["January", "February", "March", "April", "May",
                "June", "July", "August", "September",
                "October", "November","December"]

let month = "";
for (let i = 0; i < months.length; i++) {
    if (date.getMonth() == i) {
        month = months[i];
    }
}
console.log(`Previous Month Is ${month} And Last Day Is ${date.getDate()}`);


"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"