let astroImage;
let mode = 0; /* for longer rgb view, mode = -1; */
const magnitude = 6;
let alpha = 200;
let timer;
// adjusts how much background noise to ignore:
let noiseFilter = 0;
let singleNoteRandomizer;
let lastNoteTime;
let osc4Playing;

presentMode();

function preload() {
  chordSetup();
  getImage();
}

function setup() {
  let canvas = createCanvas(windowWidth, windowWidth * 0.56); /*16:9*/
  userStartAudio();
  frameRate(45);
  background(0);
  // Setup music
  singleNoteRandomizer = int(random(100, 200));
  noCursor();
}

function draw() {
  if (frameCount % singleNoteRandomizer == 0 && !osc4Playing) {
    playOneNote();
    singleNoteRandomizer = int(random(100, 200));
  }
  if (astroImage.width > 2) {
    astroImage.loadPixels();
    drawPixels();
  }
}

function keyPressed() {
  if (key === " ") {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  if (key === "1") {
    mode = 1;
    resetTimer();
  }
  if (key === "2") {
    mode = 2;
    resetTimer();
  }
  if (key === "0") {
    mode = 0;
    resetTimer();
  }
  if (key === "ArrowRight") {
    getImage();
    mode = 0;
  }
  //   for saving images
  // if (key === '+') {
  //   saveCanvas(canvas, 'expanding_universe', 'jpeg')
  // }
}

function presentMode() {
  timer = setInterval(function () {
    let state = mode;
    mode++;
    if (mode != state && mode != 3) {
      playsound();
    }
    if (mode > 2) {
      getImage();
      mode = 0;
    }
  }, 20000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth * 0.56);
}

function touchStarted() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function resetTimer() {
  clearInterval(timer);
  presentMode();
  // playsound();
}
