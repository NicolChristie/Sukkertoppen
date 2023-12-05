let centerX, centerY;
let rectWidth = 30;
let rectHeight = 50;
let distanceFromCenter = 25;
let CircX =200
let CircY =200
let outerCircles = [];
let creationTime;
let innerCircle;
let hitBoxCooldown;
let hitBoxHit;
let level;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  creationTime = millis()
  hitBoxCooldown = millis();
  hitBoxHit = millis();
  level = 4
}

function draw() {
  background(220);
  for (let i = 0; i < outerCircles.length; i++) {
    moveCircleTowards(innerCircle, outerCircles[i]);
    fill(0, 128, 255);
    ellipse(outerCircles[i].x, outerCircles[i].y,             outerCircles[i].radius * 2);
  }
  if (millis() - creationTime > 1000) {
    if(outerCircles.length < level){
    // Create a new outer circle on a random edge of the canvas
    createOuterCircle();
    // Reset the creation time for the next circle
    creationTime = millis()
  }
  }
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
  console.log(hitBoxCooldown)
  if (mouseIsPressed){
    if(hitBoxCooldown < millis() - 1000){
      if(mouseButton == LEFT){
        fill(220)
        hitBoxCooldown = millis()
      }
      }
  }else{
  fill(0, 128, 255);
  }
  
  rect(0, 0, rectWidth, rectHeight);
  pop();
  innerCircle = {x: CircX, y: CircY, radius: 30}
  fill(255)
  ellipse(innerCircle.x, innerCircle.y, innerCircle.radius);
  
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
function moveCircleTowards(target, circle) {
  // Calculate the direction towards the target
  let dx = target.x - circle.x;
  let dy = target.y - circle.y;

  // Normalize the direction to get a unit vector
  let magnitude = dist(circle.x, circle.y, target.x, target.y);
  let normalizedX = dx / magnitude;
  let normalizedY = dy / magnitude;

  // Move the circle towards the target
  circle.x += normalizedX * circle.speed;
  circle.y += normalizedY * circle.speed;
  
}

function createOuterCircle() {
  // Randomly choose one of the four edges
  let edge = int(random(4));
  let newOuterCircle;

  if (edge === 0) {
    // Top edge
    newOuterCircle = { x: random(width), y: 0, radius: 20, speed: 2 };
  } else if (edge === 1) {
    // Right edge
    newOuterCircle = { x: width, y: random(height), radius: 20, speed: 2 };
  } else if (edge === 2) {
    // Bottom edge
    newOuterCircle = { x: random(width), y: height, radius: 20, speed: 2 };
  } else {
    // Left edge
    newOuterCircle = { x: 0, y: random(height), radius: 20, speed: 2 };
  }

  // Add the new circle to the array
  outerCircles.push(newOuterCircle);
}
