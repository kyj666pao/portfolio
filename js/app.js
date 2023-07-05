// -------navBar effect after scroll down------
const navElm = document.querySelector(".navbar");
const navAnchorElm = document.querySelectorAll(".navbar ul li a");
const contactSectionElm = document.querySelector("#contact");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 650) {
    navElm.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navElm.style.color = "white";
    navAnchorElm.forEach((a) => {
      a.classList.add("active")
      // a.style.color = "white";
    });
    contactSectionElm.classList.add("show");
  } else {
    navElm.style = "";
    navAnchorElm.forEach((a) => {
      a.classList.remove("active")
      // a.style.color = "rgb(255, 123, 0)";
    });
    contactSectionElm.classList.remove("show");
  }
});

// -----home page typing animation (typed.js)-----
const typed = new Typed("#typed", {
  strings: ["Fullstack Developer", "Software Engineer", "Frontend Designer"],
  typeSpeed: 100,
  startDelay: 500,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  smartBackspace: false,
});

// ----- landing page animation -----
const text = document.querySelectorAll(".thePaths");
// console.log("text", text[0].getTotalLength());
// for (let i = 0; i < text.length; i++) {
//   console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
// }

const lastWord = document.querySelector("#l30");
const animation = document.querySelector("div.landing-animation");
lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease; opacity: 0; pointer-events: none;";
});
