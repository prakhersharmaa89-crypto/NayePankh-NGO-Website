/* ============================================
   NayePankh Foundation — Script
   Handles: page navigation, animated counters,
   donation amount selector, progress bars,
   and contact form submission.
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Page navigation ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const gotoButtons = document.querySelectorAll('[data-goto]');
  const pages = document.querySelectorAll('.page');

  function showPage(pageId) {
    pages.forEach(function (p) { p.classList.remove('active'); });
    navLinks.forEach(function (l) { l.classList.remove('active'); });

    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    const activeLink = document.querySelector('.nav-link[data-page="' + pageId + '"]');
    if (activeLink) activeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    animateProgressBars();
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      showPage(link.getAttribute('data-page'));
    });
  });

  gotoButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showPage(btn.getAttribute('data-goto'));
    });
  });

  /* ---------- Animated stat counters ---------- */
  function animateCount(el, target) {
    let start = 0;
    const duration = 1600;
    const stepTime = 16;
    const increment = target / (duration / stepTime);

    const timer = setInterval(function () {
      start = Math.min(start + increment, target);
      const value = Math.round(start);
      let display;

      if (value >= 100000) {
        display = (Math.round(value / 10000) / 10) + 'L+';
      } else if (value >= 1000) {
        display = Math.round(value / 1000) + 'K+';
      } else {
        display = String(value);
      }

      el.textContent = display;

      if (start >= target) clearInterval(timer);
    }, stepTime);
  }

  function runStatCounters() {
    document.querySelectorAll('.stat-num').forEach(function (el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      animateCount(el, target);
    });
  }

  /* ---------- Donation amount selector ---------- */
  const amtButtons = document.querySelectorAll('.amt-btn');
  amtButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      amtButtons.forEach(function (b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
    });
  });

  /* ---------- Animated progress bars ---------- */
  function animateProgressBars() {
    document.querySelectorAll('.prog-fill').forEach(function (bar) {
      bar.style.width = '0';
      setTimeout(function () {
        bar.style.width = bar.getAttribute('data-width') + '%';
      }, 100);
    });
  }

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('fname').value.trim();
      const email = document.getElementById('femail').value.trim();

      if (!name || !email) {
        alert('Please fill in your name and email.');
        return;
      }

      // NOTE: This is a front-end only demo.
      // To actually receive these messages, connect this form to a
      // backend service such as Formspree, EmailJS, or your own server.
      successMsg.style.display = 'flex';

      contactForm.reset();

      setTimeout(function () {
        successMsg.style.display = 'none';
      }, 5000);
    });
  }

  /* ---------- Init on load ---------- */
  runStatCounters();
  animateProgressBars();

});
