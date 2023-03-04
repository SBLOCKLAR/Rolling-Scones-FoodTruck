const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.pageLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const cart = document.querySelector('#cart');
const addToCart = document.querySelectorAll('.addToCart');
const product = [{
    'id': "",
    'price': "",
    'size': "",
    'qty': "",
}];