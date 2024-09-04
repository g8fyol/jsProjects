"use strict";
let modelbtn = document.querySelectorAll(".modelbtn");
let modelContainer = document.querySelector(".modelContainer");

let body = document.querySelector("body");
const openWindow = function () {
  modelContainer.classList.toggle("hidden");
};
const closeWindow = function () {
  modelContainer.classList.toggle("hidden");
};

let closebtn = document.querySelector(".closebtn");

for (let i = 0; i < modelbtn.length; i++) {
  modelbtn[i].addEventListener("click", function () {
    modelContainer.classList.toggle("hidden");
  });
}

closebtn.addEventListener("click", function () {
  closeWindow();
});

//close using esc button
body.addEventListener("keydown", function (event) {
  // key: "Escape"
  if (event.key === "Escape") {
    closeWindow();
  }
});
