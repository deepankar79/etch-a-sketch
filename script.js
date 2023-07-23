"use strict";

let el, uchoice;
const btns = document.querySelectorAll(".butt");
const fele = document.getElementById("main");
const pickColor = document.getElementById("colorInput");
const color = document.querySelector(".grid");

//function to create grid
const createGrid = function (size) {
  for (let i = 0; i < size * size; i++) {
    el = document.createElement("div");
    color.style.gridTemplateColumns = `repeat(${size}, minmax(0,1fr))`;
    color.style.gridTemplateRows = `repeat(${size}, minmax(0,1fr))`;
    el.classList.add(`gridR--${i + 1}`, "grid-items");
    color.appendChild(el);
  }
};

//function for Color input by user

const colorGrid = function () {
  color.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = pickColor.value;
  });
};

//function returns a random color

const randomColor = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = Math.floor(Math.random() * (81 - 20) + 20);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

//function for rgb button
const randomRGB = function () {
  color.addEventListener("mouseover", function (e) {
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
  color.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = prgDrk();
  });
};

//function for eraser button
const eraser = function () {
  color.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items"))
      e.target.style.backgroundColor = "white";
  });
};

createGrid(16);
colorGrid();

//function for new grid input by user(resetGrid button)
const resetGrid = function () {
  let choice;
  do {
    choice = prompt("Enter new size of Grid (Not more than 100)");
  } while (choice > 100);
  if (choice === null || choice === "") return;

  while (color.firstChild) {
    color.removeChild(color.lastChild);
  }

  createGrid(choice);
  colorGrid();
};

//clears grid
const resetBoard = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((c1) => (c1.style.backgroundColor = "white"));
};

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
