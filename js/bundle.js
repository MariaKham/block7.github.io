!function(e){var t={};function n(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var c=function(){var e=document.querySelector(".article__read-more"),t=document.querySelectorAll(".article__text--display--none"),n=document.querySelector(".article__read-more");e.addEventListener("click",(function(n){n.preventDefault(),"Читать далее"==e.textContent?(e.textContent="Скрыть",t.forEach((function(e){e.classList.remove("article__text--display--none")}))):(e.textContent="Читать далее",t.forEach((function(e){e.classList.add("article__text--display--none")})))})),e.addEventListener("click",(function(){n.classList.toggle("article__read-more--close")}));var c=document.querySelector(".modal-call"),i=document.querySelectorAll(".header__btn-call"),a=document.querySelector(".modal-call__close"),o=document.querySelector(".modal-feedback"),r=document.querySelectorAll(".header__btn-chat"),l=document.querySelector(".modal-feedback__close");i.forEach((function(e){e.addEventListener("click",(function(){c.classList.add("modal-call--active")}))})),r.forEach((function(e){e.addEventListener("click",(function(){o.classList.add("modal-feedback--active")}))})),a.addEventListener("click",(function(){c.classList.toggle("modal-call--active")})),l.addEventListener("click",(function(){o.classList.toggle("modal-feedback--active")})),c.addEventListener("click",(function(e){c.classList.contains("modal-call--active")&&"modal-call__container"==e.target.className&&c.classList.toggle("modal-call--active")})),o.addEventListener("click",(function(e){o.classList.contains("modal-feedback--active")&&"modal-feedback__container"==e.target.className&&o.classList.toggle("modal-feedback--active")}))};var i=function(){var e,t=document.querySelector(".brands__container");function n(){window.innerWidth<768&&"false"==t.dataset.mobile&&(e=new Swiper(t,{slidesPerView:"auto",wrapperClass:"brands__wrapper",slideClass:"brands__card",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),t.dataset.mobile="true"),window.innerWidth>=768&&(t.dataset.mobile="false",t.classList.contains("swiper-initialized")&&e.destroy())}n();var c,i=document.querySelector(".technique__container");function a(){window.innerWidth<768&&"false"==i.dataset.mobile&&(c=new Swiper(i,{slidesPerView:"auto",wrapperClass:"technique__wrapper",slideClass:"technique__card",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),i.dataset.mobile="true"),window.innerWidth>=768&&(i.dataset.mobile="false",i.classList.contains("swiper-initialized")&&c.destroy())}a();var o=document.querySelectorAll(".brands__card--visually-hidden"),r=document.querySelector(".brands__show-btn"),l=document.querySelector(".brands__show-btn");r.addEventListener("click",(function(e){e.preventDefault(),"Показать все"==r.textContent?(r.textContent="Скрыть",o.forEach((function(e){e.classList.remove("brands__card--visually-hidden")}))):(r.textContent="Показать все",o.forEach((function(e){e.classList.add("brands__card--visually-hidden")})))})),r.addEventListener("click",(function(){l.classList.toggle("brands__show-btn--close")}));var s=document.querySelectorAll(".technique__card--visually-hidden"),d=document.querySelector(".technique__show-btn"),u=document.querySelector(".technique__show-btn");d.addEventListener("click",(function(e){e.preventDefault(),"Показать все"==d.textContent?(d.textContent="Скрыть",s.forEach((function(e){e.classList.remove("technique__card--visually-hidden")}))):(d.textContent="Показать все",s.forEach((function(e){e.classList.add("technique__card--visually-hidden")})))})),d.addEventListener("click",(function(){u.classList.toggle("technique__show-btn--close")}));var f,_=document.querySelector(".prices__container");function m(){window.innerWidth<768&&"false"==_.dataset.mobile&&(f=new Swiper(_,{slidesPerView:"auto",wrapperClass:"prices__wrapper",slideClass:"prices__card",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),_.dataset.mobile="true"),window.innerWidth>=768&&(_.dataset.mobile="false",_.classList.contains("swiper-initialized")&&f.destroy())}m(),window.addEventListener("resize",(function(){n(),a(),m()}))};(function(){var e=document.querySelector(".block-menu"),t=document.querySelector(".header__burger-btn"),n=document.querySelector(".block-menu__burger-btn");t.addEventListener("click",(function(){e.classList.add("block-menu--active")})),n.addEventListener("click",(function(){e.classList.toggle("block-menu--active")})),e.addEventListener("click",(function(t){e.classList.contains("block-menu--active")&&"block-menu__container"==t.target.className&&e.classList.toggle("block-menu--active")})),window.addEventListener("scroll",(function(t){e.classList.contains("block-menu--active")&&window.scrollTo(0,0)}))})(),c(),i()}]);
//# sourceMappingURL=bundle.js.map