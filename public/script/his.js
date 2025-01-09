function makeScreenWhite(event) {
  event.preventDefault();
  document.body.style.backgroundColor = "white";
  document.body.innerHTML = "";

  setTimeout(() => {
      window.location.href = event.target.href;
  }, 500);
}

function fadeToBlack(event) {
event.preventDefault();

const fadeOverlay = document.createElement("div");
fadeOverlay.className = "fade";
document.body.appendChild(fadeOverlay);

setTimeout(() => {
    fadeOverlay.style.opacity = "1";
}, 10);

setTimeout(() => {
    window.location.href = event.target.href;
}, 1000);
}

// สไลด์รูป
const slider = document.getElementById("slider");
const images = document.querySelectorAll(".slideshow-wrapper img");
const totalImages = images.length;
let currentIndex = 0;

const firstImageClone = images[0].cloneNode(true);
slider.appendChild(firstImageClone);

function slideImages() {
  currentIndex++;

  const offset = currentIndex * -65;
  slider.style.transform = `translateX(${offset}%)`;

  if (currentIndex === totalImages) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0%)`;
      currentIndex = 0;

      setTimeout(() => {
        slider.style.transition = "transform 1.3s ease-in-out";
      }, 10);
    }, 1300);
  }
}

setInterval(slideImages, 5000);