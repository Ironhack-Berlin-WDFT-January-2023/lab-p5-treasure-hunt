const game = new Game();


function preload() {
  game.preload()
  

}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  createCanvas(1000,1000)
}

function draw() {
  game.drawGrid();
  game.player.draw();

}
