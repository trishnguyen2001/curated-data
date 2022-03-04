function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0, 0, 0);
  strokeWeight(10);
  ellipse(width * 0.5, height*0.5, width * 0.75, width * 0.75);
  ellipse(width * 0.3, height * 0.4, width * 0.1, width * 0.1);
  ellipse(width * 0.7, height * 0.4, width * 0.1, width * 0.1);
  line(width* 0.4, height * 0.55, width * 0.6, height * 0.55);
}