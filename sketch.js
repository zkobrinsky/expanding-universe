let astroImage;
let mode = 0; /* for longer rgb view, mode = -1; */
const magnitude = 5;
let alpha = 200;
let timer;
// adjusts how much background noise to ignore:
let noiseFilter = 0;

presentMode();

function preload() {
  // getImage();
  getImageFromUrls()
  // for web editor: getImageFromUrls();
}

function setup() {
  createCanvas(windowWidth, windowWidth*0.5625); /*16:9*/
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
    mode = 1;
    resetTimer()
  }
  if (key === '2') {
    mode = 2;
    resetTimer()
  }
  if (key === '0') {
    mode = 0;
    resetTimer()
  }
  if (key === 'ArrowRight') {
    getImage();
    resetTimer();
    mode = 0;
  }
}

function presentMode() {
  timer = setInterval(function(){
    mode++;
    backgroundSwitch = true;
    if (mode >2) {
        getImage();
        }
  }, 20000);
}

function windowResized() {
    resizeCanvas(windowWidth, windowWidth*0.5625)
}

function resetTimer() {
  clearInterval(timer);
  presentMode();
}
