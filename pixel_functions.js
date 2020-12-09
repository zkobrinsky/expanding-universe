function drawPixels() {
    for (let i = 0; i < 1000; i++) {
        let x = int(random(astroImage.width));
        let y = int(random(astroImage.height));
        let offset = ((y * astroImage.width) + x) * 4;
        let r = astroImage.pixels[offset + 0];
        let g = astroImage.pixels[offset + 1];
        let b = astroImage.pixels[offset + 2];
        
        if (mode == 0) {
          alpha = 255;
          r = astroImage.pixels[offset + 0];
          g = astroImage.pixels[offset + 1];
          b = astroImage.pixels[offset + 2];
        }
          
           if (mode == 1) {
             alpha = 200;
            if (r > b /*&& r > 20*/ ) {
              r = r * magnitude;
              b = 0;
            } else {
            if (r < b /* || r < 20*/) {
              r = 0;
              g = 0;
              b = 0;
            }
          }
           }
        
          if (mode == 2) {
            alpha = 200;
            if (b > r /* && b > 20*/) {
              b = b * magnitude;
              r = 0;
            } else {
            if (b < r /* || b < 20 */) {
              r = 0;
              g = 0;
              b = 0;
            }
          }
          }
            
          fill(r,g,b, alpha);
          noStroke();
          circle(map(x, 0, astroImage.width, 0, width), map(y, 0, astroImage.height, 0, height), width / random(200, 350));
          // add random translucent spots to make more animated:
          // fill(0, 50)
          // circle((random(0, windowWidth)), random(0, windowHeight), width / random(200, 350));
        }
}

