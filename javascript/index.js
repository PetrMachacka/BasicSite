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

// Flipbook functionality
function toggleFullscreen(imgElement) {
  // Odstranit existující modal, pokud už je aktivní
  const existing = document.querySelector('.page--zoomed-clone');
  if (existing) {
    existing.remove();
    document.body.classList.remove('modal-open');
    return;
  }

  const originalPage = imgElement.closest('.flipbook .page');
  if (!originalPage) return;

  // Vytvořit klon a přidat třídu pro stylování
  const clone = originalPage.cloneNode(true);
  clone.classList.add('page--zoomed-clone');

  // Umožnit opětovné zavření
  const clonedImg = clone.querySelector('img');
  if (clonedImg) {
    clonedImg.addEventListener('click', () => {
      clone.remove();
      document.body.classList.remove('modal-open');
    });
  }

  document.body.appendChild(clone);
  document.body.classList.add('modal-open');
}


