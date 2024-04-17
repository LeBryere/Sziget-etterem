/************************************************************************\
                                 POPUP VIDEO
\************************************************************************/
const openPopupButton = document.getElementById("openPopupButton"),
   closeButton = document.getElementById("closeButton"),
   vid = document.getElementById("leb__bg_vid"),
   videoPopup = document.getElementById("videoPopup"),
   pauseButton = document.querySelector("#lebVid button"),
   lebVid = document.getElementById("lebVid"),
   fullscreenButton = document.getElementById("fullscreenButton"),
   muteButton = document.getElementById("muteButton");

openPopupButton.addEventListener("click", () => {
   videoPopup.style.display = "flex";
   vid.paused ? vid.play() : null;
});

closeButton.addEventListener("click", () => {
   videoPopup.style.display = "none";
   vid.pause()
});

pauseButton.addEventListener("click", () => {
   vid.paused ? (vid.play(), pauseButton.innerHTML = "<img src='images/icons/pause.png' alt='Pause' class='filter-color' />", pauseButton.style.color = "var(--design-500)") : (vid.pause(), pauseButton.innerHTML = "<img src='images/icons/play.png' alt='Play' class='filter-color'/>", pauseButton.style.color = "#fff")
});

muteButton.addEventListener("click", () => {
   vid.muted = !vid.muted;

   if (vid.muted) {
      muteButton.innerHTML = "<img src='images/icons/sound.png' alt='Sound' class='filter-color' />";
   } else {
      muteButton.innerHTML = "<img src='images/icons/mute.png' alt='Mute' class='filter-color' />";
   }
});

document.addEventListener("DOMContentLoaded", () => {
   (window.matchMedia("(orientation: landscape)").matches) ? lebVid.style.top = ".5rem" : lebVid.style.top = "inherit";

   fullscreenButton.addEventListener("click", () => {
      vid.requestFullscreen ? vid.requestFullscreen() :
         vid.mozRequestFullScreen ? vid.mozRequestFullScreen() :
            vid.webkitRequestFullscreen ? vid.webkitRequestFullscreen() :
               vid.msRequestFullscreen ? vid.msRequestFullscreen() : null
   });

   window.addEventListener("orientationchange", () => {
      window.matchMedia("(orientation: landscape)").matches ? lebVid.style.top = "auto" : lebVid.style.top = ".5rem";
   });
});