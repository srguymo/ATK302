var song1;

function preload() {
  song1 = loadSound('assets/cse.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();  // this is what starts the sound

}

function draw() {

}

function mouseReleased(){
if (song1.isPlaying()) {
  song1.pause();
} else {
  song1.play();
}
//song1.pause();

}
function touchStarted() {
  getAudioContext().resume();
}
