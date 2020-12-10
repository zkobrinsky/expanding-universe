  
  function getImage() {
    let randomizer = parseInt(random(0,727))
    loadImage(`./SDSS_assets/cropped_fixed_images/img${randomizer}.jpg`, (e) => {
      astroImage = e;
      resetTimer()
    }, 
    () => {
      // if it fails, try again:
      getImage()
    })
  }

  function getImageFromUrls() {
    loadImage(getSdssUrls()[parseInt(random(0, 765))], (e) => {
      astroImage = e, resetTimer()
    }, () => {
      // if it fails, try again:
      getImageFromUrls()
    })
  }




  //gets nasa apod collection (iterating back by date (collectionRequestLength))
  function getNasaCollection() {
    let imageObjs = [];
    const collectionRequestLength = 50;
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
    return imageObjs;
  }
  


  
  function getHubbleCollection() {
    let imageObjs = [];
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
    return imageObjs;
  }
  
  function getImageFromHubble() {
    let image = getHubbleCollection()[int(random(0, imageObjs.length))]
    loadImage(image.image_files[2].file_url, img => {
      astroImage = img;
    })
  }