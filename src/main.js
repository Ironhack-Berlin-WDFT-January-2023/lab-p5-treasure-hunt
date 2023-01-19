const game = new Game();

function preload() {
  console.log("preload")

}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  createCanvas(1000,1000)
}

function draw() {
  game.drawGrid();

}
