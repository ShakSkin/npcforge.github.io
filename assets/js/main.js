// assets/js/main.js

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        if (!name || !email) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});

// FaucetPay Payment Integration (dummy example)
function initiatePayment(userId, amount) {
    // Here you would integrate with FaucetPay API
    console.log(`Initiating payment of ${amount} for user ${userId}`);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = link.getAttribute("href");
        const targetElement = document.querySelector(targetID);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});