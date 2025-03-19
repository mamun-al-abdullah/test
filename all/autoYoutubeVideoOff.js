const audio = document.querySelector(".html5-main-video")

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // Resume playing if audio was "playing on hide"
    if (playingOnHide) {
      audio.play();
    }
  }
});
