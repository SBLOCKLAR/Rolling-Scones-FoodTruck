// Hamburger menu collapse

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.pageLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Products
// const product = {
//     productName: document.querySelector('.productName').innerHTML,
//     productPrice: document.querySelector('.productPrice').innerHTML,
//     roastSelection: document.querySelector('#roastSelector').value,
//     // imgSrc: document.querySelector.getAttribute('src'),
//     qty: document.querySelector('.qtySelect').value
// }
const cartContents = document.querySelector(".cartContents")
const product =
    `<div class="cartItem">
    <img class="cartImg" src="../IMAGES/MERCH/toteBag.png" alt="">
    <p class="cartProductName">Everyday Tote Bag</p>
    <input type="number" class="qtyInCart">
    <p class="cartProductPrice">$13.99</p>
</div>`;

// Hide and Show Cart
const cartIcon = document.querySelector('#cart');
const cartPreview = document.querySelector('.cartPreview');
const keepShopping = document.querySelector('#keepShopping');


cartIcon.addEventListener('click', () => {
    cartPreview.classList.toggle('open');
});

keepShopping.addEventListener('click', () => {
    cartPreview.classList.toggle('open');
})

if (cartPreview.classList.contains('open')) {
    cartPreview.setAttribute('display', 'hidden');
}

// Cart Elements
const cart = [];
const counter = document.querySelector('.cartCounter');
counter.innerHTML = cart.length;
const checkoutButton = document.querySelector('#checkout');

// Render the cart
function loadCart(cart) {
    if (cart.length === 0) {
        // Disable the Checkout button
        checkoutButton.disabled = true;
        // Update the header to Empty Alert
        const header = document.querySelector('.previewHeader');
        header.textContent = "Oh no! There's nothing here! :(";
    } else {
        // Enable Checkout Button
        checkoutButton.disabled = false;
        // Update Header
        header.textContent = "Your Shopping Cart"
    }
}
loadCart(cart);

// Add an item to the cart
function addToCart(item) {
    // Render cart item
    function renderCartItem() {

    }
}

// Remove an item from the cart


// Get the total price of the items in the cart



