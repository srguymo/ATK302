var timer = 0;
var myState =0;


function setup() {
createCanvas (800,800);
rectMode(CENTER);
ellipseMode(CENTER);

}






function draw() {
fill('yellow');
  rect (width/2,height/2, 150,400);

switch(myState){
case 0://green
fill('green');
ellipse (width/2,height/2+ 120,100,100);
fill('black');
ellipse (width/2,height/2,100,100);
fill('black');
ellipse (width/2,height/3,100,100);
timer++;
if (timer>200){
  timer=0;
  myState=1
}
break;
case 1://yellow
fill('black');
ellipse (width/2,height/2+ 120,100,100);
fill('yellow');
ellipse (width/2,height/2,100,100);
fill('black');
ellipse (width/2,height/3,100,100);


timer++;
if (timer>200){
  timer=0;
  myState=2
}
break;
case 2://red
fill('black');
ellipse (width/2,height/2+ 120,100,100);
fill('black');
ellipse (width/2,height/2,100,100);
fill('red');
ellipse (width/2,height/3,100,100);

timer++;
if (timer>200){
  timer=0;
  myState=0
}
break
}




}
