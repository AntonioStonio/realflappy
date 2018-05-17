// Arrays for the X and Y positions of the Aliens
var sphereCoordsX = [0, 0, 0, 0, 0];
var sphereCoordsY = [0, 0, 0, 0, 0];

// Other variables
var sphereDia = 25, speed = 1, score = 0;
var end = false, shoot = false;
var speed = 1;
var milkyway;
var alienimage;
var fighterjet;
var oof;
var oof2;

function preload(){
  roblox = loadImage("Roblox.png");
  alienimage = loadImage ("robloxhead.png");
  fighterjet = loadImage ("fighterjet.png");
  oof = loadSound ("oof.wav");
  oof2 = loadSound ("oof2.wav");
}

function setup() {
  // Create an area that is not the full screen
  createCanvas(900, 800);

  // set the x position of each alien randomly
  for( var i = 0; i < 5; i++){
    sphereCoordsX[i] = random(20, width-20);
    // The variable width is the width of the Canvas
    // We would use height for the height of the Canvas
  }
  textSize(40);
  // Setting this for the size the score will be displayed at
}

function draw() {
  background(0);
  image(roblox,0,0,width,height);
  drawSpheres();
  moveSpheres();
  drawShip();
  if (shoot){
    checkShoot();
  }
  endCheck();
  if (end){
    background(0);
    fill(255,0,0);
    text ("Game Over", width/2 - 80, height/2);
  }
  fill(255);
  text ("Score : "+score, 300, 50);
  // Write a line to Display the Score,
  // near the top, cenetered would be best
}

var y = 0;


function drawSpheres(){
  fill(66, 209, 244);
  noStroke();
  for(var i = 0; i < 5; i++){
    image(alienimage, sphereCoordsX[i], sphereCoordsY[i], 40,40);

  }
}

function moveSpheres(){
  for(i = 0; i < 5; i += 1){
    sphereCoordsY[i] += speed;

  }
}

  // Draw the ship so that it follows the mouse left to right
  // but stays the same distance from the botom of the screen
function drawShip(){
  fill(255,0,0);
  image(fighterjet, mouseX - 30, height - 70, 60, 60)

}

function checkShoot(){
  strokeWeight(3);
  stroke(0,255,0);
  //fill(255,0,0);
    if (shoot == true){
    fill (0, 255, 0);
    line (mouseX, 730, mouseX, 0);
  for(i = 0; i < 5; i++){
      if(mouseX >= sphereCoordsX[i] && mouseX <= sphereCoordsX[i] + 40){
        sphereCoordsY[i] = 0;
        sphereCoordsX[i] = random(20, 780);
      	score++;
        oof.play();
        speed = speed + 0.05;
     }
  }
}
  // Check to see if you hit
  // Use a loop to see if any of the aliens was hit.
  // Probably some sort of If like checking if your
  // padle hit your ball in last challenge.
  // If you hit, you should probably increase the score

  shoot = false;
  strokeWeight(1);
}

function mousePressed(){
  shoot = true;
}

function endCheck(){
	if(y>=740){
  background(255)
  fill(255, 0, 0);
  textSize(100);
  text ("Game Over", 130, 400);
  }
 for(var i = 0; i < 5; i++){
  if(sphereCoordsY[i] >= height - 30){
    end = true;
      oof2.play();
  }
}

  // Check to see if any of the Aliens made it past the ship
  // You'll probably need some sort of loop here
}
