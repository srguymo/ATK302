
var timer = 200;


function setup() {
  // put setup code here
  createCanvas (800,800);
  background ('green');
}

function draw() {
  // put drawing code here
//  textSize (100) ;
//  text(timer, width/2, height/2);
timer = timer -1;
if (timer == 0) {
  background (random(256),random(256),random(256));
  timer = 200;
}




}
