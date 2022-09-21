let image = document.getElementsByTagName("img");
console.log(image.length);
for (let i = 0; i < image.length; i++) {
    image[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    image[i].setAttribute("alt", "Elzero Logo");
}