let div =document.querySelector("div");

function countdown () {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        clearInterval(counter);
        location.href = "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/"
    }
}

let counter = setInterval(countdown, 1000);