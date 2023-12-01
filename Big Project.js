let centerX, centerY;
let rectWidth = 30;
let rectHeight = 50;
let distanceFromCenter = 25;
let CircX =200
let CircY =200
function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(220);

  // Calculate the angle to face the mouse
  let dx = mouseX - CircX;
  let dy = mouseY - CircY;
  let angle = atan2(dy, dx);

  // Calculate the position of the rectangle
  let rectX = CircX + cos(angle) * distanceFromCenter;
  let rectY = CircY + sin(angle) * distanceFromCenter;

  // Draw the rotating rectangle
  push();
  translate(rectX, rectY);
  rotate(angle);
  rectMode(CENTER);
  if (mouseIsPressed){
      if(mouseButton == LEFT){
        fill(220)
      }
  }else{
  fill(0, 128, 255);
  }
  
  rect(0, 0, rectWidth, rectHeight);
  pop();
  circle(CircX,CircY,30)
if (keyIsDown(LEFT_ARROW)) {
         CircX -= 5;
    console.log("hit")
       }
    
       if (keyIsDown(RIGHT_ARROW)) {
         CircX += 5;
       }
    
       if (keyIsDown(UP_ARROW)) {
         CircY -= 5;
       }
    
       if (keyIsDown(DOWN_ARROW)) {
         CircY += 5;
       }
}
