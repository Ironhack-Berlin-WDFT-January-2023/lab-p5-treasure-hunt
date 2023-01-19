const game = new Game();

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent("canvas");
}

function preload(){
  game.preload()
}

function draw() {
  clear()
  
  game.drawGrid();
  
  game.player.draw()
  
  //game.treasure.drawTreasure()
}
