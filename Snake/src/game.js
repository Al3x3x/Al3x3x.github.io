import { Snake } from "./snake.js";
import { Food } from "./food.js";
import { Score } from "./score.js";
import {
  DIR_DOWN,
  DIR_RIGHT,
  DIR_UP,
  DIR_LEFT,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
} from "./direction.js";

export class Game {
  constructor(
    canvasPantalla,
    msgLabel,
    scoreLabel,
    fpsLabel,
    speed,
    targetFps
  ) {
    this.canvas = canvasPantalla;
    this.msg = msgLabel;
    this.scoreLabel = scoreLabel;
    this.fpsLabel = fpsLabel;
    this.speed = speed;
    this.targetFps = targetFps;

    this.ctx = this.canvas.getContext("2d");
    this.gameOn = false;
    this.fps = 0;
    this.scores = new Score(this.scoreLabel);
    this.snake = new Snake(this.speed);
    this.food = new Food(this.canvas.width, this.canvas.height, "#EDE916");
    this.candy = new Food(this.canvas.width, this.canvas.height, "#f00");
    this.candy.active = false;
    this.nextDir = "";

    document.addEventListener(
      "keydown",
      (e) => this.directionListener(e, this),
      false
    );
  }

  start() {
    this.gameOn = true;
    this.interval = setInterval(() => {
      this.fpsLabel.innerText = "" + this.fps;
      this.fps = 0;
    }, 1000);
    this.animation = window.requestAnimationFrame(() => this.play());
  }

  play() {
    this.update();
    this.draw();
    setTimeout(() => {
      this.animation = window.requestAnimationFrame(() => this.play());
    }, 1000 / this.targetFps);
  }

  update() {
    this.fps = this.fps + 1;
    if (this.snake.x[0] % 20 === 0 && this.snake.y[0] % 20 === 0) {
      this.snake.update();
      this.snake.changeDir(this.nextDir);
    }

    this.snake.move(this.canvas.width, this.canvas.height);

    if (this.snake.isEating(this.food)) {
      this.food.spawn(this.snake.x, this.snake.y);
      this.snake.grow(); // falta

      if (this.snake.x.length % 7 === 0) {
         this.candy.active = true;
         this.candy.spawn(this.snake.x, this.snake.y);
         const self = this;
         setTimeout(() => {
           self.candy.active = true;
       }, 300);
       }
       this.scores.increment(1);
    }

    if (this.candy.active && this.snake.isEating(this.candy)) {
      this.candy.active = false;
      this.snake.grow();
      this.snake.grow();
      this.snake.grow();
      this.scores.increment(3); 
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, 800, 800);
    this.snake.draw(this.ctx);
    this.food.draw(this.ctx);
    if (this.candy.active) this.candy.draw(this.ctx);
  }

  directionListener(e, self) {
    switch (e.key) {
      case KEY_DOWN: //down
        e.preventDefault();
        self.nextDir = DIR_DOWN;
        break;
      case KEY_RIGHT: //right
        e.preventDefault();
        self.nextDir = DIR_RIGHT;
        break;
      case KEY_UP: //up
        e.preventDefault();
        self.nextDir = DIR_UP;
        break;
      case KEY_LEFT: //left
        e.preventDefault();
        self.nextDir = DIR_LEFT;
        break;
      default:
    }
  }
}
