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
  fill('#ADF7B6');
  rect(0, 350, 750, 63);
  fill('#77EA85');
  triangle(360, 18, 240, 360, 430, 360);
  fill(102);
  rect(81, 81, 63, 63);

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
