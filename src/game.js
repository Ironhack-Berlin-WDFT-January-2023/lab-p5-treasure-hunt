class game {
  drawGrid() {
    background(1000);
    for (var x = 0; x < width+1; x += width / 10) {
      for (var y = 0; y < height+1; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
}

class player {
  constructor() {
    this.row = 0
    this.col = 0
    this.width = 100
		this.height = 100
		this.image = "\.assets\character-down.png"

  }

/*Next step is creating a class Player. It should have at least:

a col property, to indicate the column
a row property, to indicate the row the player is in.
a moveUp() method, to move the player up one row
a moveDown() method, to move the player down one row
a moveLeft() method
a moveRight() method
Expected output:

const player = new Player(0,0) // (0,0) = Initial position (col, row)
player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2 */