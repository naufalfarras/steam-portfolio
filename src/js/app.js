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


// window.addEventListener('click', function (e) {
//     // console.log(e.target.parentNode);
//     if (sidenav.classList.contains('is-open') && e.target != sidenav && e.target.parentNode != sidenav) {
//         sidenav.classList.toggle('is-open');
//     }
// });

mobileMenu.addEventListener('click', function () {
    sidenav.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
});

overlay.addEventListener('click', function() {
    sidenav.classList.remove('is-open');
    overlay.classList.remove('is-open');
})