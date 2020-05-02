var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x=0;
var ws=0
var tempz= 0


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61752,us&units=imperial&';
  var myIDString = 'appid=a4417b903f4be84d16f88f157e240ada'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws= weather.wind.speed;
  tempz= weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background('#2dbcff') ;
    fill('black');
    text("Welcome to Weather", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
text("This is the Weather in " +weather.name, 20, 40);
text("The Tempature is " + weather.main.temp, 20,60);
text("The Humidity is " + weather.main.humidity,20,80);
text("The Windspeed is "+ weather.wind.speed, 20,100);


noStroke();
fill('white');
ellipse(x,220,150,90);
ellipse(x,190,80,80);
x=x+ ws/3;
if(x > width) x=0;


fill('#ff5043');
var tmp=0;
tmp= map(tempz,-10,100,2, height-10);
rect( width-40,height- 10,30,-tmp);

      break;

  }
}
