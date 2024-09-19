let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    slideIndex = (index + totalSlides) % totalSlides; // Ensure index is within bounds
    carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Optional: Automatic slide transition
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Initial call to show the first slide
showSlide(slideIndex);



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        // nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
  });

 