class Circle {
    constructor (x,y,diameter){
        this.x=x; 
        this.y=y;
        this.diameter = diameter;
        this.isRising = true;
        this.color = null;
        // make the colors of the circles to white-black
        this.colorFrom = color(0,0,0)
        this.colorTo = color(255,255,255)
        this.lerpAmount = 0; 
    }
    draw (){
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }
    update (){ 
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1); // .45
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount)
        //top boundary
        if (this.y <= this.diameter/2){
            this.isRising = false; 
        }
        //bottom boundary
        if (this.y >= canvas.height - this.diameter / 2) {
            this.isRising = true;
        }
        if (this.isGrowing){
            this.diameter +=1; 
        } else {this.diameter -=  1; }
        if (this.diameter > maxDiameter){
            this.isGrowing = false;
        }
        if (this.diameter < minDiameter) {
            this.isGrowing = true;
        }
    }
}