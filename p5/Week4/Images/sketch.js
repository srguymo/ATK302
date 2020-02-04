var cina ;
var corgi ;
var pompom ;

function setup() {
  // put setup code here
  createCanvas(1000,1000) ;
cina = loadImage ("assets/cin.jpg")
corgi = loadImage ("assets/corg.jpg")
pompom = loadImage ("assets/pom.jpg")
}

function draw() {
  // put drawing code here
image(cina, 0, 0, 200, 200) ;
image(corgi, 0, 200, 200, 200);
image(pompom, 0, 400, 200, 200);


}
