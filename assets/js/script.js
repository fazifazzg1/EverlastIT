// Script for responsive navigation and form handling
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav-list');
  const yearSpan = document.getElementById('year');

  // Toggle mobile navigation menu
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Update the current year in the footer
  if (yearSpan) {
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  }

  // Contact form submission handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
      }
      // Build a mailto link to open default email client with filled details
      const subject = encodeURIComponent('Заявка с сайта Everlast IT St.');
      const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`);
      const mailtoLink = `mailto:fazifazzg@yandex.ru?subject=${subject}&body=${body}`;
      // Trigger the email client
      window.location.href = mailtoLink;
      // Show a confirmation alert after a small delay
      setTimeout(() => {
        alert('Спасибо! Ваше сообщение подготовлено для отправки.');
      }, 500);
      contactForm.reset();
    });
  }
});