"use strict";
let el;
const fdiv = document.querySelector(".div1");
const fele = document.getElementById("main");
const btnR = document.querySelector(".btnR");
const btnE = document.querySelector(".btnE");
const btnRB = document.querySelector(".btnRB");
const btnC = document.querySelector(".btnC");
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
