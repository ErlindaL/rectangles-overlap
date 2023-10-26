let value = 255;
let x = 100;
let y = 200;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('game')
}

function draw() {
  background(220);
  rect(400,300,100,200);
  fill(value);
  rect(x,y,100,200);
  fill(0);
  noStroke()
  
  textFont('arial');
  textAlign(CENTER);
  textSize(16);
  text('Press the letter keys to make the rainbow rectangle overlap with the black one!', 300,100);
}

function keyPressed() {
    //Q
  if (keyCode === 81) {
    value = color(242,81,72);
    x = x + 34;
  }
    //W
  if (keyCode === 87) {
    value = color(242,132,72);
    y = y + 67;
  }
  //E
  if (keyCode === 69) {
    value = color(242,163,72);
    x = x - 23;
  }
  //R
  if (keyCode === 82) {
    value = color(242,213,72);
    y = y - 54;
  }
  //T
  if (keyCode === 84) {
    value = color(236,242,72);
    x = x + 12;
  }
  //Y
  if (keyCode === 89) {
    value = color(202,242,72);
    y = y + 67;
  }
  //U
  if (keyCode === 85) {
    value = color(123,242,72);
    x = x - 41;
  }
  //I
  if (keyCode === 73) {
    value = color(109,242,72);
    y = y - 5;
  }
  //O
  if (keyCode === 79) {
    value = color(78,242,72);
    x = x + 39;
  }
  //P
  if (keyCode === 80) {
    value = color(78,242,83);
    y = y + 89;
  }
  //A
  if (keyCode === 65) {
    value = color(72,242,104);
    x = x - 18;
  }
  //S
  if (keyCode === 83) {
    value = color(72,242,138);
    y = y - 9;
  }
  //D
  if (keyCode === 68) {
    value = color(72,242,164);
    x = x + 24;
  }
  //F
  if (keyCode === 70) {
    value = color(72,242,196);
    y = y + 61;
  }
  //G
  if (keyCode === 71) {
    value = color(72,242,213);
    x = x - 2;
  }
  //H
  if (keyCode === 72) {
    value = color(75,200,242);
    y = y - 73;
  }
  //J
  if (keyCode === 74) {
    value = color(72,269,242);
    x = x + 34;
  }
  //K
  if (keyCode === 75) {
    value = color(75,122,242);
    y = y + 81;
  }
  //L
  if (keyCode === 76) {
    value = color(75,86,242);
    x = x - 29;
  }
  //Z
  if (keyCode === 90) {
    value = color(105,75,242);
    y = y - 25;
  }
  //X
  if (keyCode === 88) {
    value = color(150,75,242);
    x = x + 3;
  }
  //C
  if (keyCode === 67) {
    value = color(189,75,242);
    y = y + 88;
  }
  //V
  if (keyCode === 86) {
    value = color(242,75,239);
    x = x - 47;
  }
  //B
  if (keyCode === 66) {
    value = color(242,75,192);
    y = y - 52;
  }
  //N
  if (keyCode === 78) {
    value = color(242,75,150);
    x = x + 9;
  }
  //M
  if (keyCode === 77) {
    value = color(242,75,77);
    y = y + 35;
  }
}

console.log(value);


// //
//   if (keyCode === ) {
//     value = color(242,,72);
//   }