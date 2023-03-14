// import Swiper from 'swiper/bundle';
// import Swiper, { FreeMode, Parallax, Mousewheel } from 'swiper';
// Swiper.use([FreeMode, Parallax, Mousewheel]);

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`); // Update method
    });

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
    });
});
