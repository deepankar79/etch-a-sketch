"use strict";
let el;
const fdiv = document.querySelector(".div1");
const fele = document.getElementById("main");
const pickColor = document.getElementById("colorInput");
const color = document.querySelector(".grid");
const createGrid = function (size) {
  for (let i = 0; i < size * size; i++) {
    el = document.createElement("div");
    fdiv.style.gridTemplateColumns = `repeat(${size}, minmax(0,1fr))`;
    fdiv.style.gridTemplateRows = `repeat(${size}, minmax(0,1fr))`;
    el.classList.add(`gridR--${i + 1}`, "grid-items");
    fdiv.appendChild(el);
  }
};

const colorGrid = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((cl) =>
    cl.addEventListener("mouseover", function (e) {
      cl.style.backgroundColor = pickColor.value;
    })
  );
};

const randomColor = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = Math.floor(Math.random() * (81 - 20) + 20);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

const randomRGB = function () {
  fdiv.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = randomColor();
  });
};

let darkness = 90;
const prgDrk = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = darkness;
  darkness -= 10;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

const darken = function () {
  darkness = 90;
  const colr = document.querySelector(".grid");
  colr.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = prgDrk();
  });
};

const eraser = function () {
  const colr = document.querySelector(".grid");
  colr.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = "white";
  });
};

createGrid(16);
colorGrid();

const resetGrid = function () {
  let choice;
  do {
    choice = prompt("Enter new size of Grid (Not more than 100)");
  } while (choice > 100);
  if (choice === null || choice === "") return;

  while (fdiv.firstChild) {
    fdiv.removeChild(fdiv.lastChild);
  }

  createGrid(choice);
  colorGrid();
};

const resetBoard = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((c1) => (c1.style.backgroundColor = "white"));
};

const btns = document.querySelectorAll(".butt");

let uchoice;
btns.forEach((button) =>
  button.addEventListener("click", function (e) {
    uchoice = e.target.innerText;
    if (uchoice === "Reset Grid") resetGrid();
    else if (uchoice === "Reset board") resetBoard();
    else if (uchoice === "Color grid") colorGrid();
    else if (uchoice === "RGB") randomRGB();
    else if (uchoice === "Drakening") darken();
    else if (uchoice === "Eraser") eraser();
  })
);
