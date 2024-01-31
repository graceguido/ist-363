const saveImageBtn = document.getElementById("saveImageBtn");
//"event name", callback function - what event am I listening for? 
saveImageBtn.addEventListener("click", function(){
    saveCanvas("myCanvas", "png");
});

const canvas = {
    width: 800,
    height: 800
}
const totalCircles = 100; 
const circles = [];
const minDiameter = 10;
const maxDiameter = 100;

function setup () {
    createCanvas(canvas.width, canvas.height);
    //counter, condition, increment
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
    noStroke();
    for (let i = 0; i < circles.length; i++){
        circles[i].update();
        circles[i].draw()
    }
}