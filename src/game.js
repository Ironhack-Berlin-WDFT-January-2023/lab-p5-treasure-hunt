class Game {

  constructor() {
		this.player = new Player(0,0)
	}

  preload() {
		this.player.image = loadImage("assets/character-down.png")
	}

  drawGrid() {

    let w = 0
    let h = 0
    let x = 0
    let y = 0

    for (let i = 0; i <= 10; i++) {
      line(0, h, 1000, y)
    h += 100
    y += 100

    }
 
    for (let i = 0; i <=10; i++) {
      line(w, 0, x, 1000)
      w += 100
      x += 100

    }
  }

 
}

class Player {
  constructor(col, row,) {
    this.col = col
    this.row = row
    this.image
  }
  
  moveUp() {
    this.row -= 100
  }
  
  moveDown() {
    this.row += 100
  }
  
  moveLeft() {
    this.col -= 100
  }
  
  moveRight() {
    this.col += 100
  }

  draw() {
    image(this.image, this.col, this.row, 100, 100)
  }

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
  }

  class Treasure {
    constructor(col, row) {
      this.col = col;
      this.row = row;
    }

    setRandomPosition() {
      let randomPosition = 
    }


  }

























