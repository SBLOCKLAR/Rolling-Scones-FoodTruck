const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.pageLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


// const findUs = document.getElementById('#findUs');

// findUs.addEventListener('click', () => {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//     // const successCallback = (position) => {
//     //     console.log(position);
//     // }
//     // const errorCallback = (error) => {
//     //     console.error(error);
//     // };
// })

// const findUs = document.getElementById('#findUs')

// findUs.addEventListener('click'() => {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// })

