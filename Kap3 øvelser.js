function setup() {
    createCanvas(400, 400);
    frameRate(5);
    }
    function draw() {
        // background(255); 
        // let X =mouseX;
        // let Y = mouseY;
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

            //opg 6
        // let x = 5
        // let y = 7
        // let resultat
        // //Im taking each console log individually, so for each of them x=5 and y=7 at the start, except for the final question
        // resultat=--x;
        // console.log(resultat)//(5-1) resultat=4
        // resultat=x++;
        // console.log(resultat)//(5+0) resultat=5 //x is then valued at 6 after setting resultat to 5
        // resultat=y*(x++);
        // console.log(resultat)// (7*(5+0)) resultat=42 //x is set to 6 after the operation is complete
        // resultat=x**((y--)-4)
        // console.log(resultat)//(5^(7-0-4)) resultat=25 //y is set to 6 after the operation
        // resultat+=(resultat%(x**2))
        // console.log(resultat)// 25/(5^2), answer is the remainder. resultat = 0

            //opgaver 7
        // circle(X,Y,10);
    
            //opgaver 8
        // if (mouseIsPressed === true) {
        //     if (mouseButton === LEFT) {        
        //         circle(mouseX,mouseY,10);
        //     }
        //     if (mouseButton === RIGHT) {
        //         rect(mouseX,mouseY ,10,20); 
        //     }
        // }
            //opg 9
    //x=12 //number
    // y=12.5 //number
    // s="Hej" //string
    // t="12.5" //string
    // b=true //boolean
    // console.log(typeof(x)) //number
    // console.log(typeof(y)) //number
    // console.log(typeof(s)) //string
    // console.log(typeof(t)) //string
    // console.log(typeof(b)) //boolean
    // console.log(typeof(x+y)) //number
    // console.log(typeof(s+t))  //string
    // console.log(typeof(x+t)) //string
    
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

//             //opg 13
//     var x = 200; //sets x to 200
//     var y = 200; //sets y to 200
//     function setup() { 
//     createCanvas(400, 400); //makes a square background, with a size of 400 x 400
//      } 

//     function draw() { 
//     background(220);//makes the colour of the bacground rgb(220,220,220)
//     fill(0); //sets the fill colour value to black
//     ellipse(x,y,50,50); //creates a circle at the coodinates of the x and y variable, with a diameter of 50  
//     if (x >= 400){ //if the x value is bigger or equall to 400,
//     x = 0;  //set x to 0,
//     }
//     if (keyCode === UP_ARROW) { //when the up arrow is pressed
//         y = y - 1; //reduce the y variable by 1, thus making the circle go up
//     } else if (keyCode === DOWN_ARROW) { //if the up arrow is not pressed but the down arrow is pressed
//     y = y + 1; //increase the the y variabable by 1, thus making the circle go down
//     }
//     if (keyCode === LEFT_ARROW) { //if the left arrow is pressed
//         x = x - 1; //decrease the the x variabable by 1, thus making the circle go left
//     } else if (keyCode === RIGHT_ARROW) { //if the up arrow is not pressed, but the right arrow is pressed
//         x = x + 1; //increase the the x variabable by 1, thus making the circle go right
//     }
//     }

    //     //opg 14
    // let x; //create a variable called x
    // let y;  //create a variable called y
    // let xspeed;  //create a variable called xspeed
    // let yspeed;  //create a variable called yspeed

    // function setup() { 
    // createCanvas(400, 400);  //create a baclground with the size of 400x400
    // x = width/2 //set x to be half the width of the canvas
    // y = height/2 //set y to be half the height of the canvas
    // xspeed = -1; //sets xpseed to be -1
    // yspeed = 0.5*xspeed;  //sets yspeed to be half of xspeed
    // } 

    // function draw() { 
    // background(220); //makes the canvas have a colour of rgb(220,220,220)
    // ellipse(x, y, 50, 50); //creates an ellipse with a dwidth and height of 50, with its coordinates being x and y
    // x+=xspeed; // every frame increase x by xspeed (or decrease it by -1 each time)
    // y+=yspeed; // every frame increase y by yspeed (or decrease it by -0.5 each time)
    // }

        //opg 15
    // let x = 200
    // let y = 200
    // let xspeed = 10
    //     function setup() {
    //         createCanvas(400,400)
    //     }
    //     function draw() {
    //         background(210)
    //         fill(0)
    //         ellipse(x,y,50,50);
    //         x += xspeed
    //         if (x <= 0+25 || x >= width-40 ){
    //             xspeed*=-1
    //         }
    //     }

        // //opg16
        // let x1 = 30
        // let y1 = 200
        // let xspeed1 = 10
        // let x2 = 350
        // let y2 = 200
        // let xspeed2 = -10
        //     function setup() {
        //         createCanvas(400,400)   
        //     }
        //     function draw() {
        //         background(210)
        //         fill(0)
        //         ellipse(x1,y1,50,50);
        //         ellipse(x2,y2,50,50);
        //         x1 += xspeed1
        //         x2 += xspeed2
        //         if (x1 <= 0+25 || x1 >= width-40 || x1 == x2-60 ){
        //             xspeed1*=-1
        //         }
        //         if (x2 <= 0+25 || x2 >= width-40 ){
        //             xspeed2*=-1
        //         }
        //     }

        // //opg17
        // let x1 = 10
        // let y1 = 200
        // let yspeed = 10
        // let x2 = 390
        // let y2 = 200
        // function setup() {
        //     createCanvas(400,400)
        // }
        // function draw() {
        //     background(210)
        //     fill(0)
        //     line(x1,y1,x2,y2,50,50);
        //     y1 += yspeed
        //     y2 += yspeed
        //     if (y1 <= 0+25 || y1 >= height-40){
        //         yspeed*=-1
        //     }
        // }
        
        //opg18
        // let x1 = 200
        // let y1 = 10
        // let xspeed = 10
        // let x2 = 200
        // let y2 = 390
        //       function setup() {
        //           createCanvas(400,400)
        //       }
        //       function draw() {
        //         background(210)
        //         fill(0)
        //           line(x1,y1,x2,y2,50,50);
        //           x1 += xspeed
        //           x2 += xspeed
        //         if (x1 <= 0+25 || x1 >= width-40){
        //           xspeed*=-1
        //         }
        //       }
    }
    
    
