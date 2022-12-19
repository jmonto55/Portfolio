const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav_list');
const myName = document.querySelector('.logo');
const mailButton = document.getElementById('mail');

function openMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.add('open_menu');
}

hamburgerButton.addEventListener('click', openMenu);