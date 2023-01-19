class Game {

  constructor(){
    this.player = new Player(200,200)
  }


 /* constructor(){
    this.treasure = new Treasure(0,0)
  }*/
  

  preload(){
    this.player.image = loadImage("../assets/character-down.png")
   // this.treasure.image = loadImage("../assets/character-down.png")

  }

  drawGrid() {
    // https://p5js.org/reference/#/p5/line

    let w = 0 
    let h = 0
    let x= 0
    let y = 0
    

    for(let i=0; i<=10; i++){
      line(0,h,1000,y)
      h +=100
      y +=100
    }

    for(let i=0; i<=10; i++){
      line(w,0,x,1000)
      w +=100
      x +=100
    }
  }
}

class Player {
  constructor(col,row){
  this.col = col,
  this.row = row
  }

  moveUp(){
    this.row -=100
  }

  moveDown(){
    this.row +=100
  }

  moveLeft(){
    this.col -=100
  }

  moveRight(){
    this.col +=100
  }

  draw(){
    
    image(this.image, this.col, this.row,100,100)

  }
}

/*
class Treasure{
  constructor(col,row){
    this.col = col,
    this.row = row
  }

  setRandomPosition(){
    this.col = 100*(Math.floor(Math.random() * 10));
    this.row = 100*(Math.floor(Math.random() * 10));

  }

  
  drawTreasure(){
  image(this.image, this.col, this.row,100,100)
}
}*/




function keyPressed() {
  if (keyCode === 39) {
    if (game.player.col<900){
  game.player.moveRight()}
  }

  if (keyCode === 37) {
    if(game.player.col>0){
  game.player.moveLeft()}
	}

	if (keyCode === 38) {
    if(game.player.row>0){
		game.player.moveUp()}
	}

	if (keyCode === 40) {
    if(game.player.row<900)
		game.player.moveDown()
	}
}

