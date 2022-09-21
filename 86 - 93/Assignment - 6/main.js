let Div = document.querySelector('.results');

// let myDiv = document.createElement("div");


let num = document.getElementsByTagName("input")[0],
    text = document.getElementsByTagName("input")[1], 
    selector = document.getElementsByTagName("select")[0],
    creat = document.getElementsByTagName("input")[2];


creat.onclick = function (event) {
    event.preventDefault(event);
    Div.textContent = '';
    for (let i = 0; i < num.value; i++) {
        if (selector.value == "Div") {
            let myDiv = document.createElement("div");
            myDiv.className = "box"
            myDiv.id = `id-${i+1}`
            myDiv.title = "Element"
            Div.appendChild(myDiv);
            myDiv.textContent = text.value;
        }
        else {
            let mySelect = document.createElement("section");
            mySelect.className = "box"
            mySelect.id = `id-${i+1}`
            mySelect.title = "Element"
            Div.appendChild(mySelect);
            mySelect.textContent = text.value;
        }
    }
}


