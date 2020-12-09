
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
    let randomizer = parseInt(random(0,727))
    astroImage = loadImage(`./SDSS_assets/cropped_fixed_images/img${randomizer}.jpg`, () => resetTimer())
  
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