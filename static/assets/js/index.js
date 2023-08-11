const swiper = new Swiper('.main-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
