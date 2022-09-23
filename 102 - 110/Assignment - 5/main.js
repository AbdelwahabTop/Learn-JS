let div =document.querySelector("div");

function countdown () {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        clearInterval(counter);
        window.open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/", "_blank", "width=400,height=400");
    }
}

let counter = setInterval(countdown, 1000);