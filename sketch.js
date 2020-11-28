var r1,r2,r3;
var a,b;
var c,d;



function setup(){
  createCanvas(1200,500);

r1 = createSprite(650,400,50,200);
r2 = createSprite(700,200,200,50);
r3 = createSprite(100,100,50,50);

}

function draw(){
background("blue");

r1.shapeColor = "yellow";
r2.shapeColor = "yellow";

r1.x = mouseX;
r1.y = mouseY;

if (isTouch(r1,r2)){

  r1.shapeColor = "red";
  r2.shapeColor = "red"; 
}



else{
  r1.shapeColor = "yellow";
r2.shapeColor = "yellow";
}

if (isTouch(r1,r3)){

  r1.shapeColor = "red";
  r3.shapeColor = "red";
}

else{
r1.shapeColor = "yellow";
r3.shapeColor = "yellow";
}

drawSprites();
}


