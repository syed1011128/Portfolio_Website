// ================================
// Mobile Navigation
// ================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// =========================
// Contact Form
// =========================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message feature will be connected soon.");

    contactForm.reset();

});