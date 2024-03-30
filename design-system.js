function showNav() {
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
    
    var ele = document.getElementById("aside-items");
    ele.classList.toggle("show-items");
  }


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