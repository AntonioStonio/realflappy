let pillars = [];
var ySpeed = -20;
var yaccel = 0.5;
var speed = 0;
var x = 0;
var y = 300;
var x1= 500;
var y1 = 0;
var bird = 0;
var q = 0;
var yBird = 0;
var xf = 0, yf = 0, wf = 0, hf = 0;
var deleter = 0;
var endgame = 0;
var score = 0;
var wBird = 0;
var hBird = 0;

function setup(){
  createCanvas (1500, 900);
  for (let i = 0; i < 3; i++){
    let x = width + q;
    q += 600;
    let y = 0;
    let w = 100;
    let h = random(20, 550);
    pillars[i] = new Pillar(x, y, w, h);
  }
  yBird = height/2;
  imageMode(CENTER);
}

function preload (){
  bird = loadImage("flappy-bird.png");
  sky = loadImage("flappybirdbackgroud.png");
}

function draw(){
  if (endgame == 0){
    imageMode(CENTER);
    image(sky, width/2, height/2, width, height);
    for(let i = 0; i < pillars.length; i++){
      if (deleter == 1){
        pillars[0].move();
        pillars[0].show();
        deleter = 0;
        i = 0;
        } else {
          pillars[i].move();
          pillars[i].show();
      }


    }
    fill(0, 0, 0);
    stroke(0);
    textSize(40);
    text("Score " + ceil(score) / 21, 20, 40);
  // bird
    image (bird, 200, yBird, wBird, hBird);
    ySpeed=ySpeed+yaccel;
    yBird=yBird+ySpeed;
    endCheck();
  } else if (endgame == 1){
    background(0);
    fill(255,0,0);
    textSize (100);
    text ("Game Over", 450, 450);
  }
  }


function mousePressed(){
  ySpeed = -10;
}

//pillars
class Pillar {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  move(){
    this.x -= 5;
  }
  show(){
    fill(72, 244, 66);
    imageMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
    rect(this.x, this.y + this.h + 300, this.w, height - (this.h + 300) )
    if(this.x < -100){
      pillars.splice(0, 1);
      deleter = 1;
      pillars[2] = new Pillar(width + 300, 0, 100, random(50, 700));
    }
    if(this.x <= 200 && this.x + 100 >= 200 && this.h >= yBird){
      endgame = 1;
    } else if (this.x <= 200 && this.x + 100 >= 200 && this.h + 300 <= yBird) {
      endgame = 1;
    } else if (this.x <= 200 + wBird/2 && this.x + 100 >= 200 + wBird/2 && yBird - hBird/2 >= this.h && yBird + hBird/2 <= this.h +300){
      score++;
    }
    }
  }

function endCheck(){
	if(yBird > height){
    console.log("end")
  endgame = 1;
}
}
