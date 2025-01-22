const burgerMenu = document.querySelector('.burger-menu');
const navLinksList = document.querySelector('.navlinks-list');
const navLink = document.querySelectorAll('.navlink')

    burgerMenu.addEventListener('click', () => {
        navLinksList.classList.toggle('active');
        navLink.forEach(link => link.classList.toggle('active'));

    });
