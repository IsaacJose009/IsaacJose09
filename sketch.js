function setup() {
  createCanvas(400, 400);
}
let olhoX
let olhoY


function draw() {
  background(102,178,255);
  fill(255,255,102)
  circle(200,200,300);//cabeça
  fill(999)
  circle(150,150,60);//olho
  circle(250,150,60);//olho
  line(150,270,250,270);//boca
  fill(255,0,0)
  triangle(200,180,170,220,220,200);//nariz
  line(123,115,178,113);//sobrancelha
  line(225,116,279,106);//sobrancelha
  fill(97,97,202);
  //circle(150,150,30);//pupila L
  //circle(250,150,30);//pupila R
  
 olhoX= map(mouseX,0,400,130,170); 
 olhoY= map(mouseY,0,400,130,170);
  
 circle(olhoX,olhoY,30);//novo olho
 circle(olhoX+100,olhoY,30);//novo olho
  

  
  
  if(mouseIsPressed){
console.log(mouseX,mouseY);
  }
}