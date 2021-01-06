var x = [];
var y = [];
var incrementoy = [];
var h =[];
function setup() {
  createCanvas(400, 400);
  frameRate(5);
  for(var i = 0; i < 300;i = i+1){
    x[i] = floor(random(0,width));
    y[i] = 0;
    incrementoy[i] = random(1,15);
    h[i] = random(1,5);
  }
}

function draw() {
  background(220);
 
  fill('green');
  triangle(50,300,200,20,350,300);
  fill('brown');
  square(170,300,55);
  fill('white');
  circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
  circle(200,200,22);
  if(keyIsPressed){
    if((key=="r")||(key=="R")){
      fill('red');
       circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
      circle(200,200,22);
    }
     if((key=="b")||(key=="B")){
      fill('blue');
       circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
      circle(200,200,22);
    }
     if((key=="p")||(key=="P")){
      fill('purple');
       circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
      circle(200,200,22);
    }
     if((key=="y")||(key=="Y")){
      fill('yellow');
       circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
      circle(200,200,22);
    }
    if((key=="a")||(key=="A")){
       r = random(255); 
  g = random(255); 
  b = random(255); 
  a = random(255); 
      fill(r,g,b,a);
       circle(210,80,22);
  circle(230,140,22);
  circle(110,250,22);
  circle(260,270,22);
  circle(150,150,22);
      circle(200,200,22);
    }
 
  }
  if(mouseIsPressed){
    stroke(255);
    for(var i = 0; i < 300; i = i + 1){
    ellipse(x[i],y[i],h[i]);
    if(y[i]>height){
     ellipse(x[i],y[i],h[i]);
    }if(y[i]>299){
      y[i] = 0;
    }
    y[i] = y[i] + incrementoy[i];
   }
  }
}