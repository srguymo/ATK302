var myState = 0;
function preload (){

}

function setup() {
  createCanvas (800,800);

}

function draw() {
background ('#C9FFFB') ;
switch (myState) {
  case 0:
  text ("What do you get when you cross a vampire and a snowman?", 100,100) ;
    break;

  case 1:
  text ("Frost bite!",100,100) ;
    break;

}


}

function mouseReleased(){
myState= myState+1;
if (myState > 1){
  myState=0;
}
}
