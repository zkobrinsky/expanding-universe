function getImage() {
  let randomizer = parseInt(random(0, 700));
  loadImage(
    `./static/SDSS_assets/images/img${randomizer}.jpg`,
    e => {
      astroImage = e;
      // console.log(
      //   "successfully loaded image: " +
      //     `./static/SDSS_assets/images/img${randomizer}.jpg`
      // );
      resetTimer();
      playsound();
    },
    () => {
      // if it fails, try again:
      // console.log(
      //   `Could not locate image ./static/SDSS_assets/images/img${randomizer}.jpg`
      // );
      getImage();
    }
  );
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getImageFromUrls() {
  loadImage(
    `https://skyserver.sdss.org/dr16/SkyServerWS/ImgCutout/getjpeg?TaskName=Skyserver.Chart.Image&ra=${getRandom(
      151.02,
      149.12
    )}&dec=${getRandom(3.2, 1.2)}&scale=${getRandom(
      0.2,
      0.3
    )}&width=1920&height=1080&opt=&query=`,
    e => {
      astroImage = e;
      resetTimer();
    },
    () => {
      // if it fails, try again:
      getImageFromUrls();
    }
  );
}
