'use strict';

function sliders() {
const slider = document.querySelector('.brands__container');

let mySwiper;

function mobileSlider() {
  if(window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      // spaceBetween: 16,
      wrapperClass: 'brands__wrapper',
      slideClass: 'brands__card',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',       
        clickable: true,
     },
    });
    slider.dataset.mobile = 'true';
  }
  if(window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';
    if(slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }

  }
}

mobileSlider();

// window.addEventListener('resize', function() {
//   mobileSlider();
// });


const slider2 = document.querySelector('.technique__container');
let mySwiper2;

function mobileSlider2() {
  if(window.innerWidth < 768 && slider2.dataset.mobile == 'false') {
    mySwiper2 = new Swiper(slider2, {
      slidesPerView: 'auto',
      // spaceBetween: 16,
      wrapperClass: 'technique__wrapper',
      slideClass: 'technique__card',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',       
        clickable: true,
     },
    });
    slider2.dataset.mobile = 'true';
  }
  if(window.innerWidth >= 768) {
    slider2.dataset.mobile = 'false';
    if(slider2.classList.contains('swiper-initialized')) {
      mySwiper2.destroy();
    }

  }
}

mobileSlider2();

// window.addEventListener('resize', function() {
//   mobileSlider2();
// });


let brandsList = document.querySelectorAll('.brands__card--visually-hidden');
let openButton = document.querySelector('.brands__show-btn');
let icon = document.querySelector('.brands__show-btn');

openButton.addEventListener('click', function(event) {
  event.preventDefault();
  if(openButton.textContent == 'Показать все') {
    openButton.textContent = 'Скрыть';
     brandsList.forEach(function(item) 
     {item.classList.remove('brands__card--visually-hidden');});
    
  } else {
  openButton.textContent = 'Показать все';
  brandsList.forEach(function(item) 
  {item.classList.add('brands__card--visually-hidden');});
 }
});

openButton.addEventListener('click', function() {
  icon.classList.toggle('brands__show-btn--close');
  });


let techniqueList = document.querySelectorAll('.technique__card--visually-hidden');
let openButton2 = document.querySelector('.technique__show-btn');
let icon2 = document.querySelector('.technique__show-btn');

openButton2.addEventListener('click', function(event) {
  event.preventDefault();
  if(openButton2.textContent == 'Показать все') {
    openButton2.textContent = 'Скрыть';
    techniqueList.forEach(function(item) 
     {item.classList.remove('technique__card--visually-hidden');});
    
  } else {
  openButton2.textContent = 'Показать все';
  techniqueList.forEach(function(item) 
  {item.classList.add('technique__card--visually-hidden');});
 }
});

openButton2.addEventListener('click', function() {
  icon2.classList.toggle('technique__show-btn--close');
  });

  //слайдер 3
const slider3 = document.querySelector('.prices__container');

let mySwiper3;

function mobileSlider3() {
  if(window.innerWidth < 768 && slider3.dataset.mobile == 'false') {
    mySwiper3 = new Swiper(slider3, {
      slidesPerView: 'auto',
      // spaceBetween: 16,
      wrapperClass: 'prices__wrapper',
      slideClass: 'prices__card',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',       
        clickable: true,
     },
    });
    slider3.dataset.mobile = 'true';
  }
  if(window.innerWidth >= 768) {
    slider3.dataset.mobile = 'false';
    if(slider3.classList.contains('swiper-initialized')) {
      mySwiper3.destroy();
    }

  }
}

mobileSlider3();

// window.addEventListener('resize', function() {
//   mobileSlider3();
// });


window.addEventListener('resize', function() {
  mobileSlider();
  mobileSlider2();
  mobileSlider3();
});

}
export default sliders;