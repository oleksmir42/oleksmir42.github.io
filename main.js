let dropDown = document.getElementById("subMenu");

function toggleMenu() {
  dropDown.classList.toggle("open-menu");
}



var startProductBarPos = -0.9;
window.onscroll = function () {
  var bar = document.getElementById("navig");
  if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

  if (scrollY > startProductBarPos) {
    bar.style.position = "fixed";
    bar.style.top = 0;
  } else {
    bar.style.position = "relative";
  }
};

function findPosY(obj) {
  var curtop = 0;
  if (typeof obj.offsetParent != "undefined" && obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    curtop += obj.offsetTop;
  } else if (obj.y) curtop += obj.y;
  return curtop;
}

const baloonJumping = [
  { transform: "translateX(0)" },
  { transform: "translateX(200%)" },
  { transform: "translateY(0%)" },
  { transform: "translateY(-30%)" },
];

const baloonTiming = {
  duration: 400,
  iterations: 1,
};

const baloon = document.querySelector(".baloon-play");
baloon.addEventListener("mousedown", () => {
  baloon.animate(baloonJumping, baloonTiming);
});

document
  .querySelector(".baloon-play")
  .animate([{ transform: "scale(1.1, 1.1)" }], {
    duration: 3000,
    iterations: Infinity,
  });


  function playAudio(url) {
    new Audio(url).play();
  }
