let myElement = document.getElementsByTagName("input")[0];
let myDiv = document.getElementsByClassName("result")[0];

myElement.oninput = function () {
    myDiv.textContent = `{${myElement.value}} USD Dollar = {${(myElement.value * 15.6).toFixed(2)}} Egyptian Pound`
}
// console.log(result);