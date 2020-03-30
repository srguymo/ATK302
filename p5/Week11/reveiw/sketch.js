var x=0;


function setup() {
  createCanvas(500,500);


}

function draw() {
  background("red");
rect(x,10,10,10);

x= x+10;
if(x> width){
  x=0;
}




}
