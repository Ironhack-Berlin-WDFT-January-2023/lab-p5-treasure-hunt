class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    createCanvas(WIDTH, HEIGHT);
    background("beige");
    for (let i = 0; i < WIDTH; i += 100) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
      strokeWeight(4);
    }
  }
  draw() {
    clear();
    this.player.draw();
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  preload() {
    this.image = loadImage("assets/character-down.png");
  }

  moveRight() {
    this.col += 10;
    return this;
  }

  moveLeft() {
    this.col -= 10;
    return this;
  }

  moveUp() {
    this.row -= 10;
    return this;
  }

  moveDown() {
    this.row += 10;
    return this;
  }

  draw() {
    image(this.image, this.col, this.row, 50, 50);

    // (2) We can also use keyIsDown(keyCode) to move the player
    if (keyIsDown(LEFT_ARROW)) {
      if (this.col > 0) this.moveLeft();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if (this.col < width - this.width) this.moveRight();
    }

    if (keyIsDown(UP_ARROW)) {
      if (this.row > 0) this.moveUp();
    }

    if (keyIsDown(DOWN_ARROW)) {
      if (this.row < height - this.height) this.moveDown();
    }
  }
}

const player = new Player(0, 0);
console.log(player);

player.moveDown().moveDown().moveRight();
console.log(player);

// const player2 = new Player(300, 400);

// (1) Move the player
