var myState = 0;
var timer = 0;

function setup() {
  createCanvas (800,800);

}

function draw() {
background ('#F8FF94') ;
switch (myState) {
  case 0:
  textSize(20);
  text (" How do you make a lemon drop? ", 100,100) ;
timer++;
if (timer > 200){
  myState =1 ;
  timer=0;
}
    break;

  case 1:
  textSize (20);
  text ("Just let it fall.",300,300) ;
  timer++;
  if (timer > 200){
    myState =0 ;
    timer=0;
    break;

}
}
}
