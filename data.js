function getImage() {
  let randomizer = parseInt(random(0, 700));
  loadImage(
    `./SDSS_assets/images/img${randomizer}.jpg`,
    e => {
      astroImage = e;
      console.log(
        "successfully loaded image: " +
          `./SDSS_assets/images/img${randomizer}.jpg`
      );
      resetTimer();
    },
    () => {
      // if it fails, try again:
      console.log(
        `Could not locate image ./SDSS_assets/images/img${randomizer}.jpg`
      );
      getImage();
    }
  );
}
