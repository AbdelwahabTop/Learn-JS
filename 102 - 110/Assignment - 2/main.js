let pop = document.querySelector("div");
pop.style.display = "none"
let close = document.querySelector("i")

window.setTimeout(function () {
    pop.style.display = "block"
}, 5000)

close.onclick = function () {
    pop.style.display = "none"
}



