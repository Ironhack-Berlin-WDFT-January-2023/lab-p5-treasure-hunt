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

stroke ("darkgrey")
strokeWeight(2)
line(0, 0, 1000, 0)
line(0, 0, 0, 1000)
line(0, 1000, 1000, 1000)
line(1000, 0, 1000, 1000)

strokeWeight(4)
line(0, 100, 1000, 100)
line(0, 200, 1000, 200)
line(0, 300, 1000, 300)
line(0, 400, 1000, 400)
line(0, 500, 1000, 500)
line(0, 600, 1000, 600)
line(0, 700, 1000, 700)
line(0, 800, 1000, 800)
line(0, 900, 1000, 900)

line(100, 0, 100, 1000)
line(200, 0, 200, 1000)
line(300, 0, 300, 1000)
line(400, 0, 400, 1000)
line(500, 0, 500, 1000)
line(600, 0, 600, 1000)
line(700, 0, 700, 1000)
line(800, 0, 800, 1000)
line(900, 0, 900, 1000)

}
