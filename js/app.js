let xPos = 0;
let yPos = 150;
let xSpeed = 1;
let ySpeed = 1;

function setup(){
    var red = "#000";
    createCanvas(800,600);


}

function draw(){
    background(80,199,199)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    fill(120, 0, 2)
    circle(xPos,yPos,30);
    if (xPos > width || xPos < 0) {
            xSpeed *= -1;
        } else if (yPos > height || yPos <0){
            ySpeed *= -1;
        };
}