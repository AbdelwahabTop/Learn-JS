let myElement = document.getElementsByTagName("img");

for (let i = 0; i < 5; i++) {
    if (myElement[i].hasAttribute("alt")) {
        myElement[i].alt = "old";
    }
    else {
        myElement[i].alt = "Elzero New";
    }
}