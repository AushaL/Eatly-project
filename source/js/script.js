const navList = document.querySelector(".header__nav-list");
const closeBtn = document.querySelector(".header__close-btn");
const burgerBtn = document.querySelector(".header__burger");
const body = document.querySelector("body");
const faqBtns = document.querySelectorAll(".faq__button");
const faqAnswers = document.querySelectorAll(".faq__answer");
const swiper = new Swiper(".swiper", {
  // loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: {
    360: {
      autoHeight: true,
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    1024: {
      direction: "horizontal",
      slidesPerView: 2.5,
      spaceBetween: 46,
    },
  },
});

function isMobile() {
  return window.innerWidth <= 1024;
}

burgerBtn.addEventListener("click", function () {
  if (isMobile()) {
    navList.classList.add("active");
    body.style.overflow = "hidden";
  }
});

closeBtn.addEventListener("click", function () {
  navList.classList.remove("active");
  body.style.overflow = "scroll";
});

faqBtns.forEach(function (btn, index) {
  const card = btn.parentElement;
  const text = card.querySelector(".faq__answer");

  btn.addEventListener("click", function () {
    btn.classList.toggle("open");
    text.classList.toggle("open");
  });
});
