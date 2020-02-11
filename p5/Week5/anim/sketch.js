var x= 0;

function setup() {
createCanvas(400,400)


}

function draw() {
  background('blue');
  //rect (x,100,100,100);
  fill ('red');
textSize(40);
  text ("parasite",x,100);
  x=x+5;
  if (x> width) {
    x= 0 ;
  }



}
