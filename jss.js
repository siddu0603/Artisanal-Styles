document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainers = document.querySelectorAll('.image-container');
  
    slideshowContainers.forEach(function (container) {
      const leftButton = container.querySelector('.left-button');
      const rightButton = container.querySelector('.right-button');
      const slideshowImage = container.querySelector('.slideshow-image');
      const imageList = Array.from(container.querySelectorAll('.slideshow-image')).map(function (img) {
        return img.src;
      });
      let currentIndex = 0;
  
      function updateImage() {
        slideshowImage.src = imageList[currentIndex];
      }
  
      leftButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        updateImage();
      });
  
      rightButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % imageList.length;
        updateImage();
      });
  
      updateImage();
    });
  });
  