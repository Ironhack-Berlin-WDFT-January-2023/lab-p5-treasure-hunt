const game = new Game();

function keyPressed() {
  "use strict";
  switch (keyCode) {
    case UP_ARROW:
      game.player.moveUp();
      break;
    case DOWN_ARROW:
      game.player.moveDown();
      break;
    case LEFT_ARROW:
      game.player.moveLeft();
      break;
    case RIGHT_ARROW:
      game.player.moveRight();
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
