var state = 0;



function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {

  //if

  switch (state) {

    case 0:
      background('red');
      fill('white');
      textSize(100);
      text("case 0", 2, 100);
      break;

    case 1:
      background('green');
      fill('black');
      textSize(100);
      text("case 1", 100, 100);
      break;

    case 2:
      background('blue');
      fill('gold');
      textSize(100);
      text("case 2", 100, 100);
      break;


  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 3) {
    state = 0
  }


}
