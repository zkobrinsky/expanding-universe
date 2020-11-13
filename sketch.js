let astroImage;
let randomcheckX;
let randomcheckY;
let mode = 0;
const magnitude = 5;
const alpha = 200;
let backgroundSwitch = false;
let imageObjs = [];

presentMode();
getCollection();

function preload() {
  astroImage = loadImage("getjpegcodec.jpg");
  // astroImage = loadImage('https://apod.nasa.gov/apod/image/2011/C2020M3Orion_CharlesBracken1024.jpg')
}

function setup() {
  createCanvas(((astroImage.width / astroImage.height) * windowHeight), windowHeight);
  frameRate(45);
  background(0);
}

function draw() {
  // if (astroImage.width > 2) {
  astroImage.loadPixels();
  drawPixels()
  // }
  
}



function keyTyped() {
  if (key === ' ') {
    fs = fullscreen()
    fullscreen(!fs);
  }
  
  if (key === '1') {
    backgroundSwitch = true;
    mode = 1;
  }
  if (key === '2') {
    backgroundSwitch = true;
    mode = 2;
  }
  if (key === '0') {
    backgroundSwitch = true;
    mode = 0;
  }
}

function windowResized() {
  if (fullscreen) {
    resizeCanvas(((astroImage.width / astroImage.height) * windowHeight), windowHeight);
  } else {
    resizeCanvas(600, 400)
  }
}

function presentMode() {
//   for longer rgb preview:
  // mode = -1;
  setInterval(function(){
    mode++;
    backgroundSwitch = true;
    if (mode >2) {
        mode = 0;
        // getImage();
        }
  }, 20000);
}
