const menuIcon = document.querySelector('.menu i');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.mobile-menu-overlay');
const closeIcon = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});
// Mobile menu toggle
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
