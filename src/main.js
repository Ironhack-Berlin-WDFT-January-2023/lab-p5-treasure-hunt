const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload () {
  game.preload()
}

let x = 100
let y = 100


function draw() {
  clear()
  
  game.drawGrid();

  game.player.draw()

}
