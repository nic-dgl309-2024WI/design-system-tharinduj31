// Nav bar

function showNav() {
  var element = document.getElementById("c-nav-bar__items");
  element.classList.toggle("show-items");
  
  var ele = document.getElementById("aside-items");
  ele.classList.toggle("show-items");

  var mainWrapper = document.querySelector('.l-main-wrapper');
  mainWrapper.classList.toggle('l-main-wrapper--hide');
}



// According 

  function changeImage(imageId) {
    // Hide all images
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(image) {
      image.style.display = 'none';
    });

    // Show the image corresponding to the hovered link
    var imageToShow = document.getElementById(imageId);
    if (imageToShow) {
      imageToShow.style.display = 'inline-block';
    }
  }

  var hiddenMobileCards = []; // Array to store hidden mobile cards

  // Function to check if the viewport width is below a certain threshold (considered as mobile)
  function isMobileViewport() {
    return window.innerWidth < 800; // Adjust the threshold as needed
  }
  
  // Hide the "View Less" button initially only if in mobile view
  if (isMobileViewport()) {
    document.getElementById('button-view-less').style.display = 'none';
  }
  
  document.getElementById('button-view-more').addEventListener('click', function() {
    var mobileCards = document.querySelectorAll('.c-card--mobile');
    mobileCards.forEach(function(card) {
      hiddenMobileCards.push(card); // Store reference to hidden mobile cards
      card.classList.remove('c-card--mobile');
    });
    document.getElementById('button-view-more').style.display = 'none'; // Hide "View More" button
    document.getElementById('button-view-less').style.display = 'block'; // Show "View Less" button
  });
  
  document.getElementById('button-view-less').addEventListener('click', function() {
    hiddenMobileCards.forEach(function(card) {
      card.classList.add('c-card--mobile'); // Add back the c-card--mobile class
    });
    hiddenMobileCards = []; // Clear the array after showing the cards
  
    document.getElementById('button-view-less').style.display = 'none'; // Hide "View Less" button
    document.getElementById('button-view-more').style.display = 'block'; // Show "View More" button
  });



  
 // IMAGE SLIDER-carousel

const slides = document.querySelectorAll(".c-carousel-container img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

  
  
  
  


 
  
  
  
  




  