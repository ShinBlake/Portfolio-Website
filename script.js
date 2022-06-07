const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);

// const loadText = document.querySelector(".loading-text");
// const background = document.querySelector(".bg");

// let load = 0;

// let int = setInterval(blurrying, 1);

// function blurrying() {
//   ++load;

//   if (load > 99) {
//     clearInterval(int);
//   }

//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = 1 - load / 100;
//   background.style.filter = `blur(${30 - 0.3 * load}px)`;
// }
