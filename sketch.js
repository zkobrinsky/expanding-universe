let astroImage;
let randomcheckX;
let randomcheckY;
let mode = 0;
const magnitude = 5;
let alpha = 200;
let backgroundSwitch = false;
let imageObjs = [];
const collectionRequestLength = 50;
let hubbleIds = [];
let timer;

presentMode();

function preload() {
  astroImage = loadImage(`./SDSS_assets/images/img${parseInt(random(0,763))}.jpg`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
}

function draw() {
  if (astroImage.width > 2) {
    astroImage.loadPixels();
    drawPixels()
  }
}


function keyPressed() {
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
  if (key === 'ArrowRight') {
    getImage();
    resetTimer();
    // mode = 0;
  }
}

function windowResized() {
  if (fullscreen) {
    resizeCanvas(windowWidth, windowHeight);
  } else {
    resizeCanvas(600, 400)
  }
}

function presentMode() {
//   for longer rgb preview:
  mode = -1;
  timer = setInterval(function(){
    mode++;
    backgroundSwitch = true;
    if (mode >2) {
        // getImageFromHubble();
        getImage();
        }
  }, 20000);
}

function resetTimer() {
  clearInterval(timer);
  mode = 0;
  presentMode();
}
