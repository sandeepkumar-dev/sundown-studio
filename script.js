// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

function page3Animation() {
  var elemC = document.querySelector('#element-container');
  var fixed = document.querySelector('#fixed-image');

  function handleMouseEnter() {
    if (window.innerWidth > 768) {
      // Adjust the width as needed
      fixed.style.display = 'block';
    }
  }

  function handleMouseLeave() {
    if (window.innerWidth > 768) {
      // Adjust the width as needed
      fixed.style.display = 'none';
    }
  }

  function handleElementMouseEnter(e) {
    if (window.innerWidth > 768) {
      // Adjust the width as needed
      var image = e.getAttribute('data-image');
      fixed.style.backgroundImage = `url(${image})`;
    }
  }

  elemC.addEventListener('mouseenter', handleMouseEnter);
  elemC.addEventListener('mouseleave', handleMouseLeave);

  var elements = document.querySelectorAll('.element');
  elements.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
      handleElementMouseEnter(e);
    });
  });
}

document.addEventListener('DOMContentLoaded', page3Animation);

function swiperanimation() {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperanimation();
page3Animation();

var menu = document.querySelector('nav h3');
var full = document.querySelector('#full-scr');
var navimg = document.querySelector('nav img');
var flag = 0;

menu.addEventListener('click', function () {
  if (flag == 0) {
    full.style.top = 0;
    navimg.style.opacity = 0;
    document.body.classList.add('no-scroll'); // Disable scrolling
    flag = 1;
  } else {
    full.style.top = '-100%';
    navimg.style.opacity = 1;
    document.body.classList.remove('no-scroll'); // Enable scrolling
    flag = 0;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.element');

  function setBackgroundImages() {
    if (window.innerWidth <= 768) {
      elements.forEach((element) => {
        const imageUrl = element.getAttribute('data-image');
        element.style.backgroundImage = `url(${imageUrl})`;
      });
    } else {
      // Remove background images when the screen is wider than 600px (optional)
      elements.forEach((element) => {
        element.style.backgroundImage = '';
      });
    }
  }

  // Initial check when the DOM is loaded
  setBackgroundImages();

  // Check again when the window is resized
  window.addEventListener('resize', setBackgroundImages);
});
