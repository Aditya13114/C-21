var fixedRect,movingRect;
var lRect,rRect;
var fixedRect2;





function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200, 100,20);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200,30,30);
  movingRect.shapeColor = "green";

fixedRect2 = createSprite(100,200, 100,20);
  fixedRect2.shapeColor = "green"; 
lRect = createSprite(100,300,20,20);
lRect.shapeColor ="pink";

lRect.velocityX = 2;
rRect = createSprite(700,300,20,20);
rRect.velocityX = -2;
rRect.shapeColor = "purple";

}

function draw() {
  background("grey"); 

  movingRect.shapeColor = "green";
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x);
  console.log(movingRect.y)

  

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    fixedRect.shapeColor = "green";
    //movingRect.shapeColor = "green";
  }

  if(isTouching(fixedRect2,movingRect)){
    fixedRect2.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    fixedRect2.shapeColor = "green";
    //movingRect.shapeColor = "green";
  }

 bounceOff(rRect, lRect);



  drawSprites();
}








































