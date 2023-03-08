"use strict";
window.addEventListener("load", ready);

let points = 0;
let lives = 0;

function ready() {
  console.log("JavaScript ready");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_retry").addEventListener("click", startGame);
  document;
  document
    .querySelector("#btn_return")
    .addEventListener("click", showStartScreen);
}
function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
document.querySelector("#btn_retry").addEventListener("click", showStartScreen);
function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
document
  .querySelector("#btn_return")
  .addEventListener("click", showStartScreen);

function resetLives() {
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}
function startGame() {
  console.log("JavaScript kører!");

  resetLives();
  resetPoints();
  showGameScreen();
  startTimer();

  points = 0;
  lives = 3;
  // skjul startskærm
  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#sound_stadium").play();

  startAllAnimations();
  //registrer click
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
function startAllAnimations() {
  // Start falling animationer
  document.querySelector("#ball1_container").classList.add("falling");
  document.querySelector("#ball2_container").classList.add("falling");
  document.querySelector("#ball3_container").classList.add("falling");
  document.querySelector("#ball4_container").classList.add("falling");
  document.querySelector("#ball5_container").classList.add("falling");

  // Sæt position klasser
  document.querySelector("#ball1_container").classList.add("position1");
  document.querySelector("#ball2_container").classList.add("position2");
  document.querySelector("#ball3_container").classList.add("position3");
  document.querySelector("#ball4_container").classList.add("position4");
  document.querySelector("#ball5_container").classList.add("position5");
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

  document.querySelector("#sound_ball").currentTime = 0;

  document.querySelector("#sound_ball").play();

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
    .removeEventListener("click", clickBall2);

  document.querySelector("#ball2_container").classList.add("paused");

  document.querySelector("#ball2_sprite").classList.add("zoom_out");

  document
    .querySelector("#ball2_container")
    .addEventListener("animationend", ball2Gone);

  document.querySelector("#sound_wrong").currentTime = 0;

  document.querySelector("#sound_wrong").play();
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

  document.querySelector("#sound_wrong").currentTime = 0;

  document.querySelector("#sound_wrong").play();
  decrementLives();
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

  document.querySelector("#sound_ball").currentTime = 0;

  document.querySelector("#sound_ball").play();

  incrementPoints();
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

  document.querySelector("#sound_wrong").currentTime = 0;

  document.querySelector("#sound_wrong").play();
  decrementLives();
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
  document.querySelector("#ball_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  }

  showDecrementedLives();
  lives--;
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}
function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_over").currentTime = 0;
  document.querySelector("#sound_game_over").play();
  document
    .querySelector("#btn_return")
    .addEventListener("click", showStartScreen);

  stopGame();
}
function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#sound_succes").currentTime = 0;
  document.querySelector("#sound_succes").play();
  document.querySelector("#btn_retry").addEventListener("click", startGame);
  stopGame();
}
function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("times up");
  if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}
function stopGame() {
  // Stop animationer
  document.querySelector("#ball1_container").classList.remove("falling");
  document.querySelector("#ball2_container").classList.remove("falling");
  document.querySelector("#ball3_container").classList.remove("falling");
  document.querySelector("#ball4_container").classList.remove("falling");
  document.querySelector("#ball5_container").classList.remove("falling");

  // Fjern click
  document
    .querySelector("#ball1_container")
    .removeEventListener("click", clickBall1);
  document
    .querySelector("#ball2_container")
    .removeEventListener("click", clickBall2);
  document
    .querySelector("#ball3_container")
    .removeEventListener("click", clickBall3);
  document
    .querySelector("#ball4_container")
    .removeEventListener("click", clickBall4);
  document
    .querySelector("#ball5_container")
    .removeEventListener("click", clickBall5);

  // Stop og nulstil lyde, fx baggrundsmusik
  document.querySelector("#sound_stadium").pause();
  document.querySelector("#sound_stadium").currentTime = 0;

  // nulstil timer - fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
  document.querySelector("#time_sprite").classList.remove("shrink");
}
