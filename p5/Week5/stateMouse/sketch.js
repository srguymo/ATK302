var myState = 0;

function setup() {
createCanvas (800,800);



}

function draw() {



switch (myState) {
  case 0:
  background ('red');
  text("hello state 0!", 100,100);
  break;

  case 1:
  background ('green');
  text ("hello state 1!",100,100)
  break;

  case 2:
  background ('yellow');
  break;

  case 3:
  backround('red');
  break;

  case 4:
  background ('pink');
  break;


}


}

function mouseReleased() {
myState= myState + 1;
if (myState >4 ){
  myState = 0
}

}
