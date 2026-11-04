const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});