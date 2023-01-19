class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png");
  }
  drawGrid() {
    for (let xPos = 0; xPos <= WIDTH; xPos += SQUARE_SIDE) {
      line(xPos, 0, xPos, HEIGHT);
    }

    for (let yPos = 0; yPos <= HEIGHT; yPos += SQUARE_SIDE) {
      line(0, yPos, WIDTH, yPos);
    }
  }
}

class Player {
  constructor(row, col) {
    console.log("Player created");
    this.row = 0;
    this.col = 0;
    this.image;
  }

  moveUp() {
    if (this.row > 0) {
      this.row--;
    }
  }

  moveDown() {
    if (this.row < CELLS - 1) {
      this.row++;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col--;
    }
  }

  moveRight() {
    if (this.col < CELLS - 1) {
      this.col++;
    }
  }

  draw() {
    image(this.image, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {
  constructor() {
    this.row = Math.floor(Math.random() * CELLS);
    this.col = Math.floor(Math.random() * CELLS);
    this.image;
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * CELLS);
    this.col = Math.floor(Math.random() * CELLS);
  }

  draw() {
    image(this.image, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
}
