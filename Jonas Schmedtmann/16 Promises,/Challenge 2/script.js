"use strict";

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("./img/img-1.jpg").then(img => {
    currentImg = img;
    return wait(2)
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage("./img/img-2.jpg")
})
.then(img => {
    currentImg = img;
    return wait(2)
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage("./img/img-3.jpg")
})
.then(img => {
    currentImg = img;
    return wait(2)
})
.then(() => currentImg.style.display = 'none')

/*
const final = function (time, Nimg) {
    then(() => {
        createImage(`./img/img-${Nimg}.jpg`)
        .then((img) => document.body.appendChild(img))
        .catch((err) => document.body.appendChild(err.message));
    
        return wait(1)
    })
    .then(() => {
        const imgs = document.querySelectorAll('img')
        imgs.forEach(img => img.style.display = 'none')

        return wait(time)
    })
} 
*/

// wait(1)
//   .then(() => {
//     createImage("./img/img-1.jpg")
//       .then((img) => document.body.appendChild(img))
//       .catch((err) => document.body.appendChild(err.message));

//     return wait(1);
//   })
//   .then(() => {
//     const imgs = document.querySelectorAll("img");
//     imgs.forEach((img) => (img.style.display = "none"));

//     return wait(1);
//   })
//   .then(() => {
//     createImage("./img/img-2.jpg")
//       .then((img) => document.body.appendChild(img))
//       .catch((err) => document.body.appendChild(err.message));

//     return wait(1);
//   })
//   .then(() => {
//     const imgs = document.querySelectorAll("img");
//     imgs.forEach((img) => (img.style.display = "none"));

//     return wait(1);
//   })
//   .then(() => {
//     createImage("./img/img-3.jpg")
//       .then((img) => document.body.appendChild(img))
//       .catch((err) => document.body.appendChild(err.message));

//     return wait(1);
//   })
//   .then(() => {
//     const imgs = document.querySelectorAll("img");
//     imgs.forEach((img) => (img.style.display = "none"));
//   });
