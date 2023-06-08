const cartPreview = document.querySelector(".cartPreview");

export function showHideCartPreview() {
  cartPreview.classList.toggle("open");
}

if (cartPreview.classList.contains("open")) {
  cartPreview.setAttribute("display", "hidden");
}

// Cart Elements
const cart = [];
const counter = document.querySelector(".cartCounter");
counter.innerHTML = cart.length;

// Render the cart
export function loadCart(cart) {
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
