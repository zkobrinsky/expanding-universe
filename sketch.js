let astroImage;
let randomcheckX;
let randomcheckY;
let mode = 0;

function preload() {
  astroImage = loadImage("getjpegcodec.jpg");
}

function setup() {
  createCanvas(600,400);
  background(0);
}

function draw() {

  astroImage.loadPixels();
  for (let i = 0; i < 2000; i++) {
 
    let randomcheckX = random(astroImage.width);
    let randomcheckY = random(astroImage.height);
    let x = int(random(astroImage.width));
    let y = int(random(astroImage.height));
    let offset = ((y * astroImage.width) + x) * 4;
    let r = astroImage.pixels[offset + 0];
    let g = astroImage.pixels[offset + 1];
    let b = astroImage.pixels[offset + 2];
    let a = astroImage.pixels[offset + 3];


    // re-do random coords if it finds the same coord twice
    if (x == randomcheckX) {
      x = random(astroImage.width)
    }
    if (y == randomcheckY) {
      y = random(astroImage.height)
    } 
    
    if (mode == 0) {
      r = astroImage.pixels[offset + 0];
      g = astroImage.pixels[offset + 1];
      b = astroImage.pixels[offset + 2];
      a = astroImage.pixels[offset + 3];
    }
    

      
       if (mode == 1) {
      if (r > b) {
        r = r * 5;
        b = 0;
      } else {
        if (r < b) {
          r = b = g = 0;
        }
      }
       }
    
        if (mode == 2) {
      if (b > r) {
        b = b * 5;
        r = 0;
      } else {
        if (b < r) {
          r = b = g = 0;
        }
      }
      }
           
      
        
      fill(r,g,b);
      noStroke();
      // circle(map(x, 0, astroImage.width, 0, width), map(y, 0, astroImage.height, 0, height), 1);
      circle(map(x, 0, astroImage.width, 0, width), map(y, 0, astroImage.height, 0, height), width / 200);
    }
  }


function keyTyped() {
  if (key === ' ') {
    fs = fullscreen()
    fullscreen(!fs);
  }
  
  if (key === '1') {
    mode = 1;
  }
    if (key === '2') {
    mode = 2;
  }
      if (key === '0') {
    mode = 0;
  }
}

function windowResized() {
  if (fullscreen) {
    resizeCanvas(windowWidth, windowHeight);
  } else {
    resizeCanvas(600, 400)
  }
}
