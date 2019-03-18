var mySwiper = new Swiper(".swiper-container", {
    // simulateTouch: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: 'fade',
});