function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}--hovered`;
};

function handleMouseOut() {
  this.classList.remove("s-card--hovered");
  document.body.id = '';
};

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName("s-card");

  for (let i = 0; i < cardElements.length; i++) {
    const element = cardElements[i];
    element.addEventListener("mouseover", handleMouseEnter);
    element.addEventListener("mouseout", handleMouseOut);
  };
};

addEventListener("DOMContentLoaded", addEventListenersToCards);

function selectCarouseItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector(".s-cards-carousel");
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButton = document.querySelector(".s-controller__button--active");
  activeButton.classList.remove("s-controller__button--active");
  selectedButtonElement.classList.add("s-controller__button--active");
};

function showItems() {
  const items = document.querySelectorAll(".s-menu__item");
  items.forEach((item) => {
    if(item.className.indexOf("s-menu__item--off") !== -1) {
      item.classList.add("s-menu__item--on");
      item.classList.remove("s-menu__item--off");

    } else if (item.className.indexOf("s-menu__item--on") !== -1) {
      item.classList.add("s-menu__item--off");
      item.classList.remove("s-menu__item--on");

    };
  });
};