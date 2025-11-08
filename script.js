const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = images.length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + total) % total;
  showSlide(index);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Autoplay
setInterval(nextSlide, 4000);

// Gestos táctiles
let startX = 0;

slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});

