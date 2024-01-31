let canvasWidth = 800
let canvasHeight = 800
function setup() {
    //create a canvas to draw on, 800 x 800 px
    createCanvas(canvasWidth,canvasHeight);
    //set the background color, 0=black and 255=white
    background(0);
}
function draw() {
    //turns off the default looping behavior
    noLoop();
    noStroke();

    //rgb or string
    // fill("DarkCyan")

    // //x, y, diameter
    // circle(200,300,100);
    // circle(300,300,100);
    // circle(400,300,100);
    // circle(500,300,100);
    let circleDiameter = 50;
    let circleGap = 10;
    let totalCircles = 10;
    let totalRows = 10;

    let startX = (canvasWidth - (circleDiameter * totalCircles) - (circleGap * totalCircles -1))/2;
    let startY = (canvasWidth - (circleDiameter * totalRows) - (circleGap * totalRows -1))/2;

    let circleX = startX;
    let circleY = startY;

    fill("cyan")

    //inside the for loop, include the counter, condition, and increment
    for (let j=0; j < 10; j++) {
        for (let i=0; i < 10; i++) {
            let randomDiameter = random(10,100);
            let randomRed = random(0,255);
            let randomBlue = random(0,255);
            let randomGreen = random(0,255);
            let randomAlpha = random(0,255);
            fill(randomRed, randomGreen, randomBlue,randomAlpha);
            circle(circleX,circleY,randomDiameter);
            circleX += (circleDiameter + circleGap);
        }
        //reset circleX
        circleX = startX;
        //move circleY down to the next row
        circleY += (circleDiameter + circleGap);
    } // outer for loop 

}