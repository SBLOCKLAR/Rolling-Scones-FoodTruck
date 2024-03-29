// Hamburger menu collapse

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".pageLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Products
function Product(name, price, selector) {
  this.name = name;
  this.price = price;
  this.selector = selector;
}

const cartContents = document.querySelector(".cartContents");

// Hide and Show Cart
const cartIcon = document.querySelector("#cart");
const cartPreview = document.querySelector(".cartPreview");
const keepShopping = document.querySelector("#keepShopping");

cartIcon.addEventListener("click", () => {
  cartPreview.classList.toggle("open");
});

keepShopping.addEventListener("click", () => {
  cartPreview.classList.toggle("open");
});

if (cartPreview.classList.contains("open")) {
  cartPreview.setAttribute("display", "hidden");
}

// Cart Elements
const cart = [];
const counter = document.querySelector(".cartCounter");
counter.innerHTML = cart.length;
const checkoutButton = document.querySelector("#checkout");

// Render the cart
function loadCart(cart) {
  if (cart.length === 0) {
    // Disable the Checkout button
    checkoutButton.disabled = true;
    // Update the header to Empty Alert
    const header = document.querySelector(".previewHeader");
    header.textContent = "Oh no! There's nothing here! :(";
  } else {
    // Enable Checkout Button
    checkoutButton.disabled = false;
    // Update Header
    header.textContent = "Your Shopping Cart";
  }
}
loadCart(cart);

// Add an item to the cart
function addToCart(item) {
  cart.push(item);
  cartPreview.appendChild(new Product());
}

// Remove an item from the cart

// Get the total price of the items in the cart
