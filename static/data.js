function getImage() {
  let randomizer = parseInt(random(0, 700));
  loadImage(
    `./static/SDSS_assets/images/img${randomizer}.jpg`,
    e => {
      astroImage = e;
      console.log(
        "successfully loaded image: " +
          `./static/SDSS_assets/images/img${randomizer}.jpg`
      );
      resetTimer();
      playsound();
    },
    () => {
      // if it fails, try again:
      console.log(
        `Could not locate image ./static/SDSS_assets/images/img${randomizer}.jpg`
      );
      getImage();
    }
  );
}
