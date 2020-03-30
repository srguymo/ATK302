var cars= [];

function setup() {
  createCanvas(800, 800);

for(var i=0; i<20; i++){
  cars.push(new Car());
}
}

function draw() {
  background("pink");
for(var i=0; i< cars.length; i++){
cars[i].display();
cars[i].drive();
}

}

  // put drawing code here


function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    fill(this.r,this.b,this.g);
    rect(this.pos.x, this.pos.y, 100, 100);
  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }


}
