class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    // createCanvas(WIDTH, HEIGHT);
    background("beige");
    for (let i = 0; i < WIDTH; i += 100) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
      strokeWeight(4);
    }
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
    this.col += 100;
    this.image = loadImage("assets/character-right.png");
    return this;
  }

  moveLeft() {
    this.col -= 100;
    this.image = loadImage("assets/character-left.png");
    return this;
  }

  moveUp() {
    this.row -= 100;
    this.image = loadImage("assets/character-up.png");
    return this;
  }

  moveDown() {
    this.row += 100;
    this.image = loadImage("assets/character-down.png");
    return this;
  }

  draw() {
    image(this.image, this.col, this.row, 100, 100);
  }
}

const player = new Player(600, 600);

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  preload() {
    this.image = loadImage("assets/treasure.png");
  }

  setRandomPosition() {
    let rng = Math.trunc(Math.random() * WIDTH);
    this.col = rng;
    this.row = rng;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, 100, 100);
  }
}

const treasure = new Treasure(300, 200);

function keyPressed() {
  if (keyCode === 39) {
    player.moveRight();
  }
  if (keyCode === 37) {
    player.moveLeft();
  }
  if (keyCode === 38) {
    player.moveUp();
  }
  if (keyCode === 40) {
    player.moveDown();
  }
  clear();
}
