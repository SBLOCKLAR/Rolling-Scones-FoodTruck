const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.pageLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// const cart = document.querySelector('#cart');
// const addToCart = document.querySelectorAll('.addToCart');
// const product = [{
//     'id': "",
//     'price': "",
//     'size': "",
//     'qty': "",
// }];

// const productData = require('./data.json')
// Create JSON database with products. Review JSON
// Working with the below, I am struggling to retrieve the innerText propery from the HTML collection that appears with the code as is now. 
let roast = document.querySelector('#roastSelector').selectedOptions;
let size = document.querySelector('#sizeSelector').selectedOptions;

const products = [
    {
        productName: 'Coffee Beans 12oz',
        productPrice: 15.99,
        roast: roast
    },

    {
        productName: 'Cotton T-Shirt',
        productPrice: 25.99,
        size: size
    },
    {
        productName: 'Baseball Cap',
        productPrice: 27.99
    },
    {
        productName: 'Ceramic Mug',
        productPrice: 19.99
    },
    {
        productName: 'Everyday Tote Bag',
        productPrice: 13.99
    },
    {
        productName: 'Glass Tumbler',
        productPrice: 22.99
    },
]

// app.get('/products', (req, res) => {
    // res.render('products/cart', { products })
// })

// let productForm = document.querySelectorAll('.product');

// let productId = document.querySelector('.productName').innerText;
// let price = document.querySelector('.productPrice').innerText;
// let qty = document.querySelector('.qtySelect').value;

// let cartItems = [];

// productForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('add to cart')
// })