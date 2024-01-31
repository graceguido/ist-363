const saveImageBtn = document.getElementById("saveImageBtn");
saveImageBtn.addEventListener("click", function(){
    saveCanvas("myCanvas", "png");
});

const canvas = {
    width: 1500,
    //increased the width: wanted a larger/different shaped canvas
    height: 800
}
// increased the total number of circles and the max diameter
const totalCircles = 200; 
const circles = [];
const minDiameter = 5;
const maxDiameter = 150;
//included interactivity that follows the user dragging their mouse
function mouseDragged(){
    const circleDiameter = random(minDiameter, maxDiameter);
    const newCircle = new Circle(mouseX, mouseY, circleDiameter);
    circles.push(newCircle)
    if (circles.length > totalCircles) {
        circles.shift();
    }
}

function setup () {
    createCanvas(canvas.width, canvas.height);
    for (let i=0; i <totalCircles; i++){
        const circleSettings = {
            x: random (0, canvas.width),
            y: random(0, canvas.height),
            diameter: random(minDiameter,maxDiameter)
        }
        
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);
        circles.push(myCircle);
    }
}
function draw (){
    background(0);
    for (let i = 0; i < circles.length; i++){
        circles[i].update();
        circles[i].draw();
        //made the stroke magenta and specified the weight to be 5
        stroke('magenta')
        strokeWeight(5);
    }
}
