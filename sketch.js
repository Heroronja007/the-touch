var fixRect, moveRect

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 50, 80);
  fixRect.shapeColor = "green"
  moveRect=createSprite(200, 200, 50, 30);
  moveRect.shapeColor = "green"
}

function draw() {
  background(0, 0, 0);
  moveRect.x = World.mouseX
  moveRect.y = World.mouseY

  if(moveRect.x-fixRect.x<fixRect.width/2+moveRect.width/2&&
    fixRect.x-moveRect.x<fixRect.width/2+moveRect.width/2&&
    moveRect.y-fixRect.y<fixRect.height/2+moveRect.height/2&&
    fixRect.y-moveRect.y<fixRect.height/2+moveRect.height/2){
      fixRect.shapeColor = "blue"
      moveRect.shapeColor = "blue"
}else {
  fixRect.shapeColor = "green"
  moveRect.shapeColor = "green"
}

  
  drawSprites();
}