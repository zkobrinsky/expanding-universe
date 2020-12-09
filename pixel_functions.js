function drawPixels() {
    for (let i = 0; i < 2000; i++) {
        let randomcheckX = int(random(astroImage.width));
        let randomcheckY = int(random(astroImage.height));
        let x = int(random(astroImage.width));
        let y = int(random(astroImage.height));
        let offset = ((y * astroImage.width) + x) * 4;
        let r = astroImage.pixels[offset + 0];
        let g = astroImage.pixels[offset + 1];
        let b = astroImage.pixels[offset + 2];
        let a = astroImage.pixels[offset + 3];
        
        
        if (x == randomcheckX) {
          x = random(astroImage.width)
        }
        if (y == randomcheckY) {
          y = random(astroImage.height)
        } 
        
        if (mode == 0) {
          blackOut();
          r = astroImage.pixels[offset + 0];
          g = astroImage.pixels[offset + 1];
          b = astroImage.pixels[offset + 2];
          a = astroImage.pixels[offset + 3];
        }
        
    
          
           if (mode == 1) {
            blackOut();
          if (r > b) {
            r = r * magnitude;
            b = 0;
          } else {
            if (r < b) {
              r = 0;
              g = 0;
              b = 0;
            }
          }
           }
        
            if (mode == 2) {
              blackOut();
          if (b > r) {
            b = b * magnitude;
            r = 0;
          } else {
            if (b < r) {
              r = 0;
              g = 0;
              b = 0;
            }
          }
          }
               
          
            
          fill(r,g,b, alpha);
          noStroke();
          circle(map(x, 0, astroImage.width, 0, width), map(y, 0, astroImage.height, 0, height), width / random(200, 350));
        }
}


function blackOut() {
    let alpha = 0;

      if (backgroundSwitch == true) {
      background(0, 0, 0,alpha);
    }
    backgroundSwitch = false
  }
function getCollection() {
  let date = new Date();
  let dateString = ''
    for (let i = 0; i < collectionRequestLength; i++) {
      
      date.setDate(date.getDate() -i)
      dateString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
      fetch(`https://api.nasa.gov/planetary/apod?api_key=VwQg3ZEm6xVl5UzYmZFAQcx3P6IWMBFpi5Bmz8r5&date=${dateString}`)
        .then(resp => resp.json())
        .then(obj => {
            imageObjs.push(obj)
        })
        .then(console.log("success"))
  }
}


function getImage() {
  let randomizer = parseInt(random(0,763))
  astroImage = loadImage(`./SDSS_assets/images/img${randomizer}.jpg`, () => resetTimer())

}

function getHubbleCollection() {
  fetch('http://hubblesite.org/api/v3/images/printshop')
  .then(resp =>resp.json())
  .then(collection => {
    collection.forEach(pic => {
      fetch(`http://hubblesite.org/api/v3/image/${pic.id}`)
      .then(resp => resp.json())
      .then(obj => {
        imageObjs.push(obj)
      })
    })
  })
}

function getImageFromHubble() {
  let image = imageObjs[int(random(0, imageObjs.length))]
  loadImage(image.image_files[2].file_url, img => {
    astroImage = img;
  })
}
