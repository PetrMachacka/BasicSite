// Navbar hide on scroll
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.classList.add('navbar--hidden');
} else {
    // Scrolling up
    navbar.classList.remove('navbar--hidden');
}
lastScrollY = window.scrollY;
});

// Fade-in effect for hero section and about section

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > window.innerHeight * 0.3) {
    hero.classList.add('hero--faded');
  } else {
    hero.classList.remove('hero--faded');
  }
});
