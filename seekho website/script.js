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
// Category Filtering Logic
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".categories button");
  const videos = document.querySelectorAll(".video-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Add active to current
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      videos.forEach((video) => {
        const match =
          category === "all" ||
          video.getAttribute("data-category") === category;

        // Smooth hide/show
        if (match) {
          video.style.display = "block";
          video.classList.add("fade-in");
        } else {
          video.classList.remove("fade-in");
          setTimeout(() => (video.style.display = "none"), 200);
        }
      });
    });
  });
});
