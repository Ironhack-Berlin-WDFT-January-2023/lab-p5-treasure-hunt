const game = new Game();

function keyPressed() {
  "use strict";
  switch (keyCode) {
    case UP_ARROW:
      game.player.moveUp();
      game.player.image = loadImage("../assets/character-up.png");
      break;
    case DOWN_ARROW:
      game.player.moveDown();
      game.player.image = loadImage("../assets/character-down.png");
      break;
    case LEFT_ARROW:
      game.player.moveLeft();
      game.player.image = loadImage("../assets/character-left.png");
      break;
    case RIGHT_ARROW:
      game.player.moveRight();
      game.player.image = loadImage("../assets/character-right.png");
      break;
  }
}

function setup() {
  "use strict";
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  "use strict";
  game.preload();
}

function draw() {
  "use strict";
  clear();
  game.drawGrid();
  game.player.draw();
  game.treasure.draw();
}
