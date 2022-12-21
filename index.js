const hamburgerButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelector('.nav_list');
const myName = document.querySelector('.logo');

function openMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

function closeMenu() {
  hamburgerButton.classList.toggle('invisible');
  myName.classList.toggle('invisible');
  closeButton.classList.toggle('invisible');
  navItems.classList.toggle('invisible');
  navItems.classList.toggle('open_menu');
}

hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
navItems.addEventListener('click', closeMenu);

// Form Validation

function validateEmail(email, error, event) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const msg = document.getElementById('error-message');
    msg.innerText = error;
  }
}
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  const invalidEmail = 'Error, please enter an email without any upper-case letters.';
  const email = form.elements.mail;
  const emailText = email.value;
  validateEmail(emailText, invalidEmail, event);
});