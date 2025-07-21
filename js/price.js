const priceItems = document.querySelectorAll(".price__item");
let oraneIcons = [];
let whiteIcons = [];

priceItems.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    oraneIcons = event.target.querySelectorAll(".price__item--orange-icon");
    whiteIcons = event.target.querySelectorAll(".price__item--white-icon");
    removeOrAddOpacity(oraneIcons, whiteIcons, 0, 1)
  });

  item.addEventListener("mouseleave", () => {
    removeOrAddOpacity(whiteIcons, oraneIcons, 0, 1)
  });
});

function removeOrAddOpacity(orange, white, valueOne, valueTwo) {
  orange.forEach((icon) => {
    icon.style.opacity = valueOne;
  });
  white.forEach((icon) => {
    icon.style.opacity = valueTwo;
  });
}