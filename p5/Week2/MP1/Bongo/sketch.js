function setup() {
  // put setup code here
createCanvas(1000, 800);


}

function draw() {
  // put drawing code here
background (100);
//as
  if (mouseIsPressed) {
     ellipse(50, 50, 50, 50);
   } else {
     rect(25, 25, 50, 50);
   }
//x,y xords on screen
   fill ('#');
   textSize (30) ;
     text(mouseX + "," + mouseY,300,50) ;
//building bongo
fill('#fcfffd');
ellipse(304, 163, 70, 70);
fill('#');
rect(300, 134, 70, 53);


}
//just mouse clicks
function mouseReleased() {
  console.log(mouseX + ", " +mouseY);
}
