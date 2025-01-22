const carousel = document.querySelector('.carousel-container');
const cardbox = document.querySelector('.homepage-newproducts-cardbox');
const leftBtn = document.querySelector('.carousel-button.left');
const rightBtn = document.querySelector('.carousel-button.right');


  leftBtn.addEventListener('click', () => {
  cardbox.scrollBy({
    left: -cardbox.clientWidth - 20,
    behavior: 'smooth'
  });
});

    rightBtn.addEventListener('click', () => {
  cardbox.scrollBy({
    left: cardbox.clientWidth + 20,
    behavior: 'smooth'
  });
});

