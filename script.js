// JavaScript for scrolling
const container = document.querySelector('.services-scroll-container');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

scrollLeft.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
});
