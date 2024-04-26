var swiper1 = new Swiper(".product-thumb-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
  });
  
  var swiper2 = new Swiper(".product-image-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
      grabCursor: true,
    },
    freeMode: true,
    thumbs: {
      swiper: swiper1,
    },
    breakpoints: {
      575: {
        scrollbar: false,
        freeMode: false,
      }
    },
  });
  
  // Initialize FancyBox on the main slides
  $('.product-image-slider .image').each(function () {
    $(this).find('img').wrap('<a data-fancybox="gallery" href="' + $(this).find('img').attr('src') + '"></a>');
  });
  
  var counter = document.querySelector('.swiper-counter');
  var currentCount = document.createElement('span');
  currentCount.className = 'count';
  currentCount.innerHTML = '1/' + swiper2.slides.length;
  counter.appendChild(currentCount);
  
  swiper2.on('slideChange', function () {
    var index = swiper2.realIndex + 1;
    photos_change(index);
  });
  
  function photos_change(index) {
    var newCount = document.createElement('span');
    newCount.className = 'count next';
    newCount.innerHTML = index + '/' + swiper2.slides.length;
  
    counter.innerHTML = '';
    counter.appendChild(newCount);
  }
  
  
  var swiper3 = new Swiper(".swiper.related-products", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
    },
  });
  
  var buttonPlus = document.querySelector(".qty-btn-plus");
  var buttonMinus = document.querySelector(".qty-btn-minus");
  
  var incrementPlus = buttonPlus.addEventListener("click", function () {
    var n = this.parentNode.querySelector(".input-qty");
    n.value = Number(n.value) + 1;
  });
  
  var incrementMinus = buttonMinus.addEventListener("click", function () {
    var n = this.parentNode.querySelector(".input-qty");
    var amount = Number(n.value);
    if (amount > 0) {
      n.value = amount - 1;
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function updateElementVisibility() {
      var elementtrigger = document.getElementById('addtocart');
      var elements = document.querySelectorAll('.floating-btn');
  
      elements.forEach(function (element) {
        if (isElementInViewport(elementtrigger)) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    }
  
    // Initial check on page load
    updateElementVisibility();
  
    // Attach scroll event listener to check element visibility on scroll
    window.addEventListener('scroll', function () {
      updateElementVisibility();
    });
  
    // You may also want to check visibility on other events like resize
  });
  
  
  const radioButtons = document.querySelectorAll('.sizes-wrapper input[type="radio"]');
  const sizeHeader = document.querySelector('.sizes-wrapper h6 strong');
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      const labelText = this.nextElementSibling.querySelector('p').textContent;
      sizeHeader.textContent = labelText;
    });
  });
  
  function toggleActive(element) {
    element.classList.toggle('active');
  }