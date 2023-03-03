"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  console.log("JavaScript kører!");

  points = 0;
  lives = 3;

  document.querySelector("#ball1_container").classList.add("falling");
  document.querySelector("#ball2_container").classList.add("falling");
  document.querySelector("#ball3_container").classList.add("falling");
  document.querySelector("#ball4_container").classList.add("falling");
  document.querySelector("#ball5_container").classList.add("falling");

  document
    .querySelector("#ball1_container")
    .addEventListener("click", clickBall1);
  document
    .querySelector("#ball2_container")
    .addEventListener("click", clickBall2);
  document
    .querySelector("#ball3_container")
    .addEventListener("click", clickBall3);
  document
    .querySelector("#ball4_container")
    .addEventListener("click", clickBall4);
  document
    .querySelector("#ball5_container")
    .addEventListener("click", clickBall5);
}

function clickBall1() {
  console.log("Click ball");

  document
    .querySelector("#ball1_container")
    .removeEventListener("click", clickBall1);

  document.querySelector("#ball1_container").classList.add("paused");

  document.querySelector("#ball1_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball1_container")
    .addEventListener("animationend", ball1Gone);

  incrementPoints();
}

function ball1Gone() {
  document
    .querySelector("#ball1_container")
    .removeEventListener("animationend", ball1Gone);

  document.querySelector("#ball1_sprite").classList.remove("zoom_out");

  document.querySelector("#ball1_container").classList.remove("paused");

  document.querySelector("#ball1_container").classList.remove("falling");
  document.querySelector("#ball1_container").offsetWidth;
  document.querySelector("#ball1_container").classList.add("falling");

  document
    .querySelector("#ball1_container")
    .addEventListener("click", clickBall1);
}

function clickBall2() {
  console.log("Click ball2");

  document
    .querySelector("#ball2_container")
    .removeEventListener("click", clickball2);

  document.querySelector("#ball2_container").classList.add("paused");

  document.querySelector("#ball2_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball2_container")
    .addEventListener("animationend", ball2Gone);

  decrementLives();
}

function ball2Gone() {
  document
    .querySelector("#ball2_container")
    .removeEventListener("animationend", ball2Gone);

  document.querySelector("#ball2_sprite").classList.remove("zoom_out");

  document.querySelector("#ball2_container").classList.remove("paused");

  document.querySelector("#ball2_container").classList.remove("falling");
  document.querySelector("#ball2_container").offsetWidth;
  document.querySelector("#ball2_container").classList.add("falling");

  document
    .querySelector("#ball2_container")
    .addEventListener("click", clickBall2);
}

function clickBall3() {
  console.log("Click ball3");

  document
    .querySelector("#ball3_container")
    .removeEventListener("click", clickBall3);

  document.querySelector("#ball3_container").classList.add("paused");

  document.querySelector("#ball3_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball3_container")
    .addEventListener("animationend", ball3Gone);

  decrementPoints();
}

function ball3Gone() {
  document
    .querySelector("#ball3_container")
    .removeEventListener("animationend", ball3Gone);

  document.querySelector("#ball3_sprite").classList.remove("zoom_out");

  document.querySelector("#ball3_container").classList.remove("paused");

  document.querySelector("#ball3_container").classList.remove("falling");
  document.querySelector("#ball3_container").offsetWidth;
  document.querySelector("#ball3_container").classList.add("falling");

  document
    .querySelector("#ball3_container")
    .addEventListener("click", clickBall3);
}
function clickBall4() {
  console.log("Click ball");

  document
    .querySelector("#ball4_container")
    .removeEventListener("click", clickBall4);

  document.querySelector("#ball4_container").classList.add("paused");

  document.querySelector("#ball4_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball4_container")
    .addEventListener("animationend", ball4Gone);
}

function ball4Gone() {
  document
    .querySelector("#ball4_container")
    .removeEventListener("animationend", ball4Gone);

  document.querySelector("#ball4_sprite").classList.remove("zoom_out");

  document.querySelector("#ball4_container").classList.remove("paused");

  document.querySelector("#ball4_container").classList.remove("falling");
  document.querySelector("#ball4_container").offsetWidth;
  document.querySelector("#ball4_container").classList.add("falling");

  document
    .querySelector("#ball4_container")
    .addEventListener("click", clickBall4);
}
function clickBall5() {
  console.log("Click ball");

  document
    .querySelector("#ball5_container")
    .removeEventListener("click", clickBall5);

  document.querySelector("#ball5_container").classList.add("paused");

  document.querySelector("#ball5_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball5_container")
    .addEventListener("animationend", ball5Gone);
}

function ball5Gone() {
  document
    .querySelector("#ball5_container")
    .removeEventListener("animationend", ball1Gone);

  document.querySelector("#ball5_sprite").classList.remove("zoom_out");

  document.querySelector("#ball5_container").classList.remove("paused");

  document.querySelector("#ball5_container").classList.remove("falling");
  document.querySelector("#ball5_container").offsetWidth;
  document.querySelector("#ball5_container").classList.add("falling");

  document
    .querySelector("#ball5_container")
    .addEventListener("click", clickBall5);
}
function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();

  if (points >= 10) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  }

  showDecrementedLives();
  lives--;
}

function incrementLives() {
  console.log("få et liv");
  lives++;
  showIncrementedLives();
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}
