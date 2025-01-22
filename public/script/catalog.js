const showAllBtn = document.querySelector('.catalog-showall');
const allHiddenProducts = document.querySelectorAll('.catalog-product-card--hidden');

showAllBtn.addEventListener('click', () => {
    if (showAllBtn.innerText === "Réduire") {
        showAllBtn.innerText = "Voir tout";
    } else {
        showAllBtn.innerText = "Réduire"
    }
    
    allHiddenProducts.forEach((card) => {
        card.classList.toggle('card-displayed');
    })
})

