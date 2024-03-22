// Import GSAP and ScrollTrigger from a CDN
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.parallax-container img');

  images.forEach(img => {
    const speed = img.getAttribute('data-speed');
    gsap.to(img, {
      y: () => `-${window.scrollY * speed}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        scrub: true,
      },
    });
  });
});