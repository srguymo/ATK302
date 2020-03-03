//the bouncing image code is from  icm's code for bouncing ball from p5js

var myState = 0 ;
var timer = 0;
var mic;
var vol;
var zoom;
//var y= 0;
let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 4;
let r = 25;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  zoom = loadImage ("assets/zoom.png")
  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0 :
    background('red');
    text("Chad the Cat", 100, 100) ;
timer++ ;
if(timer >200){
  myState =1;
  timer = 0;
}



    break ;

    case 1:
    background('green');
    text("Chad the cat is a soft black cat.",100,100);
    text("His favorite thing in the whole world is sleeping on the window seat in his house. ", 200, 200) ;
    text ("Chad lives a peaceful life and has never caused problems in his life.",300,300);
    break ;

    case 2:
    background('red');
    text("Chad hears a loud noise and gets spooked! What is with that look on his face? What is he going to do?", 100, 100) ;
    break ;

    case 3:
    background ('purple');
    text ("Chad is running around the living room like a fucking maniac.",100,100);
//fill('pink');
  // ellipse(x, y, r*2, r*2);
  image (zoom,x,y,r*2, r*2);
 x += xspeed;
 y += yspeed;
 if (x > width - r || x < r) {
   xspeed = -xspeed;
 }
 if (y > height - r || y < r) {
   yspeed = -yspeed;
 }
    break ;

    case 4:
    background ('pink');
    text("Chad has singlehandedly destroyed the living room.", 100,100);
    break ;

    case 5:
    background ('yellow');
    text ("Chad only causes problems on purpouse",100,100);
    break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0 ;
  }
}
