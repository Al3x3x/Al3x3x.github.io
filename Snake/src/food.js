export class Food {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.active = true;
        this.x = 0;
        this.y = 0;
    }

    spawn(posX, posY) {
        var matrix = [], free = [], pX, pY, foodPos, i, len;
        for(i = 0; i < this.width / 20; i++) {
            matrix[i] = Array(this.height / 20).fill(0);
        }
        
        for (i = 0, len = posX.length; i < len; i++) {
            pX = Math.floor(posX[i] / 20);
            pY = Math.floor(posY[i] / 20);
            matrix[pY][pX] = 1;
        }
        
        for (i = 0; i < this.width / 20; i++) {
            for (var j = 0; j < this.height / 20; j++) {
                if (matrix[i][j] === 0) {
                    free.push([i, j]);
                }
            }
        }

        foodPos = Math.floor(Math.random() * free.length);
        this.x = free[foodPos][1] * 20;
        this.y = free[foodPos][0] * 20;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2);
         ctx.fillStyle = this.color;
        ctx.fill();
         ctx.closePath();
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}