"use strict";
let el;
const fdiv = document.querySelector(".div1");
const fele = document.getElementById("main");
const btnR = document.querySelector(".btnR");
const btnE = document.querySelector(".btnE");
const btnRB = document.querySelector(".btnRB");
const btnC = document.querySelector(".btnC");
const btnRGB = document.querySelector(".btnRGB");
const color = document.getElementById("colorInput");

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
      cl.style.backgroundColor = color.value;
    })
  );
};

const randomColor = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * 101);
  lightness = Math.floor(Math.random() * 101);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

const randomRGB = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((cl) =>
    cl.addEventListener("mouseover", function (e) {
      cl.style.backgroundColor = randomColor();
    })
  );
};

const eraser = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((c1) =>
    c1.addEventListener("mouseover", function (e) {
      c1.style.backgroundColor = "white";
    })
  );
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

btnR.addEventListener("click", resetGrid);

btnE.addEventListener("click", eraser);

btnRB.addEventListener("click", resetBoard);

btnC.addEventListener("click", colorGrid);

btnRGB.addEventListener("click", randomRGB);
