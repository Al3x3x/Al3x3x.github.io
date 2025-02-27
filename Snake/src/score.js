export class Score {
    constructor(scoreLabel) {
        this.score = 0;
        this.scoreLabel = scoreLabel;
    }

    start() {
        this.score = 0;
    }

    increment(n) {
        this.score = this.score + n;
        this.scoreLabel.innerText = ' ' + this.score;
    }
}