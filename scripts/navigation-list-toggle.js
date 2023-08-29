'use strict';

let menu = document.querySelector('.menu__inner-wrapper');
let menuToggler = document.querySelector('.menu-button-toggle');

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('menu--showed');
  menuToggler.classList.toggle('toggler--off');
  menuToggler.classList.toggle('toggler--on');
});
