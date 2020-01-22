function setup() {
  // put setup code here

   createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background('#A0CED9');
  noStroke();
  fill('#FFEE93');
  ellipse(100, 100, 90, 90);

  fill('#fcfffd');
  ellipse(300, 100, 50, 50);
  //clouds
  fill('#fcfffd');
  ellipse(320, 100, 50, 50);
  fill('#fcfffd');
  ellipse(320, 80, 50, 50);
  fill('#fcfffd');
  ellipse(330, 100, 100, 50);
  fill('#fcfffd');
  ellipse(580, 150, 50, 50);
  fill('#fcfffd');
  ellipse(595, 150, 70, 50);
  fill('#fcfffd');
  ellipse(590, 140, 50, 50);


  //trees and shit
  fill('#ADF7B6');
  rect(0, 350, 750, 63);
  fill(102);
  rect(450, 330, 43, 43);
  fill('#2ac374');
  triangle(500, 18, 398, 360, 560, 360);
  fill(102);
  rect(330, 330, 43, 43);
  fill('#77EA85');
  triangle(360, 18, 240, 360, 430, 360);

//  fill(102);
//  rect(330, 340, 43, 43);

  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
fill ('#FCF5C7');
textSize (30) ;
  text(mouseX + "," + mouseY,50,50) ;
}
