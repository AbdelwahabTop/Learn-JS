let fontStorage = document.querySelector(".font-family");
let colorStorage = document.querySelector(".color");
let fontSizeStorage = document.querySelector(".font-size");


window.addEventListener("load", function (e) {
    fontStorage.value = this.window.localStorage.getItem("font-family");
    colorStorage.value = this.window.localStorage.getItem("color");
    fontSizeStorage.value = this.window.localStorage.getItem("font-size");
});

//
this.document.styleSheets[1].cssRules[0].style.setProperty(
    "--font-family-s",
    this.window.localStorage.getItem("font-family")
);

this.document.styleSheets[1].cssRules[0].style.setProperty(
    "--color-s",
    this.window.localStorage.getItem("color")
);

this.document.styleSheets[1].cssRules[0].style.setProperty(
    "--font-size-s",
    this.window.localStorage.getItem("font-size")
);
//

window.addEventListener("click", function (e) {
    // Add properties to localStorage
    if (e.target.classList.contains("font-family")) {
        this.window.localStorage.setItem("font-family", e.target.value);
    } else if (e.target.classList.contains("color")) {
        this.window.localStorage.setItem("color", e.target.value);
    } else if (e.target.classList.contains("font-size")) {
        this.window.localStorage.setItem("font-size", e.target.value);
    }
    // Add properties in Css from localStorage
    if (true) {
        this.document.styleSheets[1].cssRules[0].style.setProperty(
            "--font-family-s",
            this.window.localStorage.getItem("font-family")
        );
        this.document.styleSheets[1].cssRules[3].style.setProperty(
            "--color-s",
            this.window.localStorage.getItem("color")
        );
        this.document.styleSheets[1].cssRules[3].style.setProperty(
            "--font-size-s",
            this.window.localStorage.getItem("font-size")
        );
    }
});



