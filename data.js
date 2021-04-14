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
      // debugger;
      resetTimer();
    },
    () => {
      // if it fails, try again:
      getImage();
    }
  );
}
