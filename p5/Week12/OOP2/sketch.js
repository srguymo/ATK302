var cars = [];
var frogPos;
var myState =0;
var maxCars = 10;
var maxTimer= 5*60;
var timer = maxTimer;


function setup() {
  createCanvas(800, 800);
//spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(400, height - 100);
textAlign(CENTER);
}

function draw() {

switch (myState) {
  case 0: //menue
  background('pink');
  fill('black');
  textSize (24);
  text("welcome to my game",width/2,height/2);
  break;

  case 1: //game
  game();
  timer= timer-1;
  if (timer <= 0){
    timer= maxTimer;
    myState = 3;
  }
  break;

  case 2: //win
  background ('purple');
  fill ('white');
  textSize (24);
  text(" Tight, you won!!", width/2, height/2);
  break;

  case 3://lose
  background ('black');
  fill ('white');
  textSize (24);
  text("Bummer, you lost", width/2, height/2);
  break;

}



}

function mouseReleased(){
  switch (myState) {
    case 0:
    myState =1;
    break;
    case 2:
    timer=maxTimer;
    cars=[];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
    myState=0;
    break;
    case 3:
    timer= maxTimer;
    cars=[];
    for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
    myState=0;
    break;

  }
}



function game(){
  background("pink");


  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
if (cars.length == 0){
  myState =2;
}
  //frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 100, 100);
  checkForKeys();

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}




function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    fill(this.r, this.b, this.g);
    rect(this.pos.x, this.pos.y, 30, 30);
  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }


}
