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


function keyPressed() {

  if (keyCode === 39) {
  game.player.moveRight()
}
if (keyCode === 37) {
  game.player.moveLeft()

}
  if (keyCode === 38) {
      game.player.moveUp()
  }
      if (keyCode === 40) {
          game.player.moveDown()
      }
    clear()
    }

