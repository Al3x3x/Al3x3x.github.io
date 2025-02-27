import { Game } from "./src/game.js";

const pantalla = document.getElementById("pantalla");
const scoreLabel = document.getElementById("score");
const fpsLabel = document.getElementById("fps");
const msgLabel = document.getElementById("msg");
let speed = 20;
let fps = 20;

let game = new Game(pantalla, msgLabel, scoreLabel, fpsLabel, speed, fps);

document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    e.preventDefault();
    if (!game.gameOn) {
      msgLabel.innerHTML = "Go!";
      game.start();
    }
  }
});

document.addEventListener(
  "endGame",
  function endGameHandler(e) {
    msg.innerHTML = "Game Over! Press <em>Space</em> to start a new game";
    game.gameOn = 0;
    window.cancelAnimationFrame(game.animation);
    clearInterval(game.interval);
  },
  false
);