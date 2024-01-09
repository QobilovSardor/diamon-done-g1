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

// navbar

const items = document.querySelectorAll(".nav-item");
const down = document.querySelectorAll(".downBox");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    var icon = item.querySelector(".arrow-icon");
    var downBox = item.querySelector(".downBox");
    if (icon) {
      icon.style.opacity = "0";
    }
    downBox.style.display = "inline-block";
    downBox.style.transition = "all .5s linear";
  });

  item.addEventListener("mouseout", () => {
    var icon = item.querySelector(".arrow-icon");
    var downBox = item.querySelector(".downBox");
    if (icon) {
      icon.style.opacity = "1";
    }

    downBox.style.display = "none";
    downBox.style.transition = "all .5s linear";
  });
});
