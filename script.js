const angleLeft = document.querySelector(".angle-left");
const angleRight = document.querySelector(".angle-right");
const imgaes = document.querySelectorAll(".img-slider img");
const texts = document.querySelectorAll(".text");
let toggle = 1;

// window.addEventListener("resize", () => {
//   const width = window.innerWidth;
//   //   const height = window.innerHeight;
//   console.log(width);
//   if (width <= 376) {
//     imgaes[0].src = `mobile-image-hero-1.jpg`;
//     imgaes[1].src = `mobile-image-hero-2.jpg`;
//     imgaes[2].src = `mobile-image-hero-3.jpg`;
//   } else if (width > 376) {
//     imgaes[0].src = `desktop-image-hero-1.jpg`;
//     imgaes[1].src = `desktop-image-hero-2.jpg`;
//     imgaes[2].src = `desktop-image-hero-3.jpg`;
//   }
// });

angleLeft.addEventListener("click", () => {
  if (toggle > 1 && toggle <= 3) {
    toggle--;
    changePic(toggle);
  }
});
angleRight.addEventListener("click", () => {
  if (toggle < 3 && toggle >= 1) {
    toggle++;
    changePic(toggle);
  }
});

function changePic(toggle) {
  if (toggle === 1) {
    console.log(toggle);
    imgaes.forEach((img) => (img.style.display = "none"));
    texts.forEach((text) => (text.style.display = "none"));
    imgaes[0].style.display = "block";
    texts[0].style.display = "grid";
  } else if (toggle === 2) {
    imgaes.forEach((img) => (img.style.display = "none"));
    texts.forEach((text) => (text.style.display = "none"));
    imgaes[1].style.display = "block";
    texts[1].style.display = "grid";
  } else if (toggle === 3) {
    imgaes.forEach((img) => (img.style.display = "none"));
    texts.forEach((text) => (text.style.display = "none"));
    imgaes[2].style.display = "block";
    texts[2].style.display = "grid";
  }
}

// (function () {
//   var reszWindow = function () {
//     var reswidth = screen.width;
//     if (reswidth < 400) {
//       var x = document.getElementsById("front");
//       x.src = "../images/colbysmall.png";
//     }
//   };
//   reszWindow();
//   $(window).resize(reszWindow);
// });
