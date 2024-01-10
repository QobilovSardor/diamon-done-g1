var swiper = new Swiper(".imgSlider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".imgPreview", {
  direction: "vertical",
  slidesPerView: 5,
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navbar

const items = document.querySelectorAll(".nav-item");
const down = document.querySelectorAll(".down");
const closeBtn = document.querySelector("#cancel");
const menuBars = document.querySelector("#menu");
const backColor = document.querySelector(".back");

items.forEach((item) => {
  item.addEventListener("click", () => {
    var icon = item.querySelector(".arrow-icon");
    var downBox = item.querySelector(".down");
    if (icon) {
      icon.classList.toggle('rotate');
    }
    downBox.classList.toggle("hideWindow")
    downBox.style.transition = "all 0.3s ease-in-out";
    
  });

  item.addEventListener("click", () => {
    var icon = item.querySelector(".arrow-icon");
    var downBox = item.querySelector(".downBox");
    // if (icon) {
    //   icon.style.transform = "rotate(0deg)";
    // }

    downBox.style.display = "none";
    downBox.style.transition = "all .5s linear";
  });
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hideBtn");
  backColor.style.opacity = "0";
});

menuBars.addEventListener("click", () => {
  closeBtn.classList.remove("hideBtn");
  backColor.style.opacity = "1";
});
