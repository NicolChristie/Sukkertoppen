function setup() {
createCanvas(400, 400);
frameRate(5);
}
function draw() {
    background(255); 
    let X =mouseX;
    let Y = mouseY;
    // let createRect;
    // text("X: " + X,0,height/4);
    // text("Y: " + Y,0,height/2);
    
        //opgaver 2
    // let Xp = pmouseX;
    // let Yp = pmouseY;
    // text("Xp: " + Xp,0,height/3);
    // text("Yp: " + Yp,0,230);

        //opgaver 3
    // let Xvel = pmouseX-mouseX;
    // let Yvel = pmouseY-mouseY;
    // text("Xvel: " + Xvel,0,120);
    // text("Yvel: " + Yvel,0,215);

        //opgaver 4
    // let Vel= sqrt((X-Xp)^2+(Y-Yp)^2);
     // text("Vel: " + Vel,0,height/1.6);

        //opgaver 5
    // let Q = 10;
    // let W = 35;
    // text("Q: " + Q,200,10)
    // text("W: " + W,200,30)
    // text("multiplier: " + Q*W,200,height/2); 
    // text("addition: " + (Q+W),200,height/3);
    // text("subtraction: " + (Q-W),200,height/4);
    // text("modulation: " + (Q%W),200,height/5);
    
        //opgaver 7
    // //circle(X,Y,10);

        //opgaver 8
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {        
            circle(mouseX,mouseY,10);
        }
        if (mouseButton === RIGHT) {
            rect(mouseX,mouseY ,10,20); 
        }
    }

        //opgaver 10
     //line(mouseX, mouseY, pmouseX, pmouseY);

        //opgaver 11
    //     if (keyCode === 70){
    //      rect(200,150,40,40)
    // } else if (keyCode === 67){
    //     circle(200,150,40)
    // } else if (keyCode === 69){
    //     ellipse(200,150,23,60)
    // }

        //opgaver 12
    // if (keyCode === 70){
    //     rect(X,Y, 40,40)
    // }
}


