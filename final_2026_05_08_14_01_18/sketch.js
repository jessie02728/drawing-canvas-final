// Code partially sourced from 'clicking on shapes and objects' by Matthew A. Bardin and 'Drawing Canvas' by dcanizares.
 
let cirX, cirY, cirD, cirR, mouseDist, squareObj, cirObj;
let img1, img2, img3, button1;
var drawcolor;

function preload(){
  img1 = loadImage('angry.png');
  img2 = loadImage('neutral.png');
  img3 = loadImage('happy.png');
}

function setup() { //set up bg (won't appear yet) and buttons
  createCanvas(500, 450); 
  squareObj = new squ(270, 0, 300, 450, 'lightblue');
  
  drawcolor=0;
  button1 = createButton("...");
  button1.style ('color','red');
  button1.style ('background-color','red');
  button1.style ('border-color','red');
  button1.position(20, 400);
  button1.mouseClicked (color2); 
  
  drawcolor=0;
  button1 = createButton("...");
  button1.position(70, 400);
  button1.style ('color','green');
  button1.style ('background-color','green');
  button1.style ('border-color','green');
  button1.mouseClicked (color3);
  
  drawcolor=0;
  button1 = createButton("...");
  button1.position(120, 400);
  button1.style ('color','blue');
  button1.style ('background-color','blue');
  button1.style ('border-color','blue');
  button1.mouseClicked (color1); 
}
 
var points; //idk what this does but nothing works if deleted D:
points = [];
function mouseDragged(){  
}

class squ { //can't draw outside canvas
  constructor(x, y, w, h, color) { 
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;  
  }
  appear() { 
    push();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  onMouseDragged() {     
 }  
}
class cir { //sprite appears when circle is clicked
  constructor(x, y, d, color) { 
    this.x = x;
    this.y = y;
    this.d = d;
    this.color = color;
    this.r = d / 2; 
  }
  appear() { 
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.d, this.d);
    pop();
  }
  onMousePressed() { 
    if (mouseIsPressed) { 
      if (this.r > dist(mouseX, mouseY, this.x, this.y)) { 
        image (img1,250,60); 
      }
    } 
  }
}

function draw() { //set up objects except buttons
  strokeWeight (0); //make bg appear
  squareObj.appear();
  squareObj.onMouseDragged();
  //image (img1, 350, 0); //BG PLACEHOLDER
  //image (img1, 50, 300); //replace w paint palette
  
  text("directions: draw !!!", 280, 10, 400, textSize(25)); //replace w window titled 'canvas' ?
  cirObj = new cir(400, 60, 40, 'yellow', stroke(drawcolor),  strokeWeight(4));
 image (img2,250,60);
 
  if (mouseIsPressed){ //the actual drawing part
  strokeWeight (5);
  stroke(drawcolor); 
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  cirR = cirD / 2; //circle borders
  mouseDist = dist(mouseX, mouseY, cirX, cirY);
  cirObj.appear(); 
  cirObj.onMousePressed();  
  
  beginShape(); //canvas borders
  for(var i in points) {
    var one_point = points[i];
    curveVertex(one_point.x, one_point.y);
  }
	endShape(); 
  
  if (mouseX < 250){ //sprite appears when you draw
    if (mouseIsPressed){
       image (img3,250,60); 
    }
  }
}

function color1(){ //change 'brush' color when button is pressed
  drawcolor = ('blue');
}
function color2(){
  drawcolor = ('red');
}
function color3(){
  drawcolor = ('green');
}
