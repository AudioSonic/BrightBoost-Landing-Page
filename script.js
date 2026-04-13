let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(slideIndex);
}

showSlides(slideIndex);
setInterval(nextSlide, 4000);