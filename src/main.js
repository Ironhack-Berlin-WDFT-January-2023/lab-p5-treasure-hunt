const game = new Game();

function preload() {
  console.log("preload");
  player.preload();
  treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  console.log("setuppsss");
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}
