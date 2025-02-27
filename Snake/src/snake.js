import { DIR_UP, DIR_DOWN, DIR_RIGHT, DIR_LEFT } from "./direction.js";

export class Snake {
  constructor(speed) {
    this.speed = speed;
    this.x = [0];
    this.y = [0];
    this.dx = [this.speed];
    this.dy = [0];
  }

  unshiftAndCut(arr) {
    const result = arr.slice();
    return result.map((el, i) => {
      if (!i) {
        return arr[0];
      } else {
        return arr[i - 1];
      }
    });
  }

  update() {
    this.dx = this.unshiftAndCut(this.dx);
    this.dy = this.unshiftAndCut(this.dy);
  }

  draw(ctx) {
    for (let i = 0; i < this.x.length; i++) {
      ctx.beginPath();
      ctx.rect(this.x[i], this.y[i], 20, 20);
      ctx.fillStyle = "#bebebe";
      ctx.strokeStyle = "#0b0b0b";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }

  changeDir(nextDir) {
    if (this.dx[0] && nextDir === DIR_UP) {
      this.dx[0] = 0;
      this.dy[0] = -this.speed;
    }
    if (this.dx[0] && nextDir === DIR_DOWN) {
      this.dx[0] = 0;
      this.dy[0] = this.speed;
    }
    if (this.dy[0] && nextDir === DIR_RIGHT) {
      this.dx[0] = this.speed;
      this.dy[0] = 0;
    }
    if (this.dy[0] && nextDir === DIR_LEFT) {
      this.dx[0] = -this.speed;
      this.dy[0] = 0;
    }
  }

  move(width, height) {
    for (let index = 0, len = this.x.length; index < len; index++) {
      this.x[index] += this.dx[index];
      this.y[index] += this.dy[index];
      if (this.x[index] > width) {
        this.x[index] = 0;
      }
      if (this.x[index] < 0) {
        this.x[index] = width;
      }
      if (this.y[index] > height) {
        this.y[index] = 0;
      }
      if (this.y[index] < 0) {
        this.y[index] = height;
      }
    }
  }

  grow() {
    const lastX = this.x[this.x.length - 1];
     const lastY = this.y[this.y.length - 1];
     const lastDX = this.dx[this.dx.length - 1];
     const lastDY = this.dy[this.dy.length - 1];
     this.x.push(lastX - Math.sign(lastDX) * 20);
     this.y.push(lastY - Math.sign(lastDY) * 20);
     this.dx.push(lastDX);
     this.dy.push(lastDY);
  }

  isEating(food) {
    const x1 = this.x[0];
    const y1 = this.y[0];
    const x2 = food.getX();
    const y2 = food.getY();
    const width = 20;
    const height = 20;

    return (
      x1 < x2 + width && 
      x1 + width > x2 && 
      y1 < y2 + height &&
      y1 + height > y2
    );
  }

  collides(width, height) {
     const x = this.x[0];
     const y = this.y[0];
     // Check collision with the wall
     if (x < 0 || x + 10 > width || y < 0 || y + 10 > height) return true;
     // Check collision with itself
     for (var i = 1, len = this.x.length; i < len; i++) {
       if (x === this.x[i] && y === this.y[i]) return true;
     }
     return false;
  }
}
