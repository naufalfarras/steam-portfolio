var mySwiper = new Swiper(".swiper-container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: 'fade',
});

var mobileMenu = document.querySelector('.mobile-menu');
var sidenav = document.querySelector('.primary-links');
var overlay = document.querySelector('.overlay');
var secondaryMenu = document.querySelectorAll('.secondary-nav ul li span');

// secondaryMenu.forEach(function (menu) {
//     menu.addEventListener('click', function (e) {
//         secondaryMenu.forEach(function (menu) {
//             menu.classList.remove('active');
//             menu.nextElementSibling.classList.remove('active');
//         });
//         e.target.classList.toggle('active');
//         e.target.nextElementSibling.classList.toggle('active');
//     });
// });

mobileMenu.addEventListener('click', function () {
    sidenav.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
});

overlay.addEventListener('click', function () {
    sidenav.classList.remove('is-open');
    overlay.classList.remove('is-open');
})