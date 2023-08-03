document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        rewind: true,
        rewindSpeed: 1000,
        speed: 1000,
        autoPlay: true,
        pauseOnHover: true
    });
    splide.mount();
});