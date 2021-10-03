gsap.from(".home img", {
  opacity: 0,
  y: 0,
});
gsap.to(".home img", {
  duration: 1,
  repeat: -1,
  yoyo: true,
  y: 10,
});

gsap.from(".home h1", { opacity: 0, y: 30, delay: 0.5 });
var tl = gsap.timeline();
var tl2 = gsap.timeline({ defaults: { delay: 1, duration: 1.5 } });

tl.from(".bar", {
  duration: 1.5,
  y: -200,
});

tl.from(".home", { y: -100 })
  .from(".logo", {
    y: -100,
    duration: 0.2,
  })
  .from(".link", {
    y: -100,
    stagger: 0.2,
    duration: 0.3,
  });

tl2.to(".mover", { y: 30, repeat: -1, yoyo: true });

let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 30) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
};

let bar = document.querySelector(".bar");
let menu = document.querySelector(".fas");
let linkbar = document.querySelector(".linkbar");
let link = document.querySelectorAll(".linkbar .link");
let open = document.querySelector(".open");
link.forEach((e) => {
  e.addEventListener("click", () => {
    linkbar.classList.remove("open");
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");
  });
});

bar.addEventListener("click", () => {
  linkbar.classList.toggle("open");
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-times");
});

let progressbar = document.querySelector("#progressbar");

let tth = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let ph = (window.pageYOffset / tth) * 100;
  progressbar.style.height = ph + "%";
};
