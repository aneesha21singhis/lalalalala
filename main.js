function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
console.log("aneesha");

function updateCanvas(){
    background("white");
    console.log("aneeshaxsingh");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}