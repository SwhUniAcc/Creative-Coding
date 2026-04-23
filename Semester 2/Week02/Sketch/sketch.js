let x, y, size;
let xSpeed, ySpeed, xDir, yDir;
let shapey1;
let circ;
let shapeArr = [];

function setup() {
  createCanvas(1024, 1024);
  x = width/2; //Middle of page width,  combines with height to center shape
  y = height/2; // Middle of page height, combines with width to center shape
  size = 10;
  xSpeed = random(0.3, 5);
  ySpeed = random(0.3, 5);
  xDir = 1;
  yDir = 1;
  
  shapey1 = new MovingShape();
    for(let i = 0; i < 200; i++) {
        shapeArr.push(new MovingShape(random(0,width),random(0,height),random(1,40)));  // add a new MovingShape to our array each loop at random pos and with random size

        let colour = color(0, 71, 171);
  }     
}

function draw() {
  noStroke();
  rectMode(CORNER); // draws from the start of the page / top left corner
  fill(0, 0, 0, 80) // Alpha channel on the background adds a smearing effect
  rect(0, 0, width, height)
  display();
  move();
  
  shapey1.move();
  shapey1.display();
  for(let i = 0; i < 200; i++) {
    shapeArr[i].move();
    shapeArr[i].display();
}
}

function move() {
x = x + (xSpeed * xDir); //add xSpeed multiplied by xDir
y = y + (ySpeed * yDir); //add ySpeed multiplied by yDir

if(x > (width-size) || x < size){
  xDir = xDir * -1; // flip between positive 1 and negative 1
  }

if(y > (height-size) || y < size){
  yDir = yDir * -1; // flip between positive 1 and negative 1
  }
}

function display() {
  stroke(255, 255, 255);
  rectMode(CENTER);
  fill(255, 255, 255);
  rect(x, y, size, size);
}

class MovingShape {
    
    constructor(startX, startY, startSize){
        this.x = startX;
        this.y = startY;
        this.size = startSize;
        this.xSpeed = random(0.3,5);
        this.ySpeed = random(0.3,5);
        this.xDir = 1;
        this.yDir = 1;
    }
    move() {
      this.x = this.x + (this.xSpeed * this.xDir);
      this.y = this.y + (this.ySpeed * this.yDir);

      if(this.x > (width-(this.size/2)) || this.x < (this.size/2)){
          this.xDir = this.xDir * -1;
    }

      if(this.y > (height-(this.size/2)) || this.y < (this.size/2)){
            this.yDir = this.yDir * -1;
        }

    }
  display(){
    stroke(255, 255, 255);
    rectMode(CENTER);
    fill(255, 255, 255);
    rect(this.x, this.y, this.size, this.size);
  }
}

class MovingCircle extends MovingShape {
    
    constructor(startX, startY, startSize, colour){
        super(startX,startY,startSize);
        this.colour = colour;
    }

    move() {
        super.move();
    
    }

    display() {
        noStroke();
        fill(this.colour);
        ellipse(this.x, this.y,this.size,this.size);
    }

}

