var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('pink');
push();
translate(y,0);
//enter bongo
fill('#F9D4F0');
ellipse(304, 163, 70, 70);
fill('#F9D4F0');
rect(300, 134, 70, 53);
fill('#F0E2A3');
ellipse(303, 148, 20, 20);
fill('#F9D4F0');
triangle(288, 133, 236, 29, 285, 77);
fill('#F9D4F0');
triangle(301, 128, 300, 29, 319, 79);
fill('#F9B1E7');
ellipse(299, 290, 60, 60);
fill('#F9B1E7');
rect(298, 320, 85, 20);
fill('#F9D4F0');
rect(280, 193, 50, 100);
fill('#664E4C');
rect(357, 136, 20, 20);
fill('#F9D4F0');
ellipse(280, 290, 60, 60);
fill('#F9D4F0');
rect(275, 320, 85, 20);
fill('#F9D4F0');
triangle(278, 260, 98, 168, 162, 265);
fill('#F9D4F0');
rect(295, 212, 85, 20);
//leave bongo
pop();
//  ellipse(y, 200, 100, 10) ;

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
