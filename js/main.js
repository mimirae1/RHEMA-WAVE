/* ============================================
   RHEMA WAVE TECHNOLOGIES
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Navigation Scroll Effect ----
  const nav = document.getElementById('mainNav');
  function handleNavScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // ---- Mobile Nav Toggle ----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
    // Close on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // ---- Scroll Animations (Intersection Observer) ----
  const animatedElements = document.querySelectorAll('.fade-in, .fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Testimonial Carousel ----
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  let currentTestimonial = 0;
  let testimonialTimer;

  function showTestimonial(index) {
    testimonialCards.forEach(function (card, i) {
      card.classList.toggle('active', i === index);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
  }

  function nextTestimonial() {
    var next = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(next);
  }

  if (testimonialCards.length > 0) {
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        clearInterval(testimonialTimer);
        showTestimonial(parseInt(this.dataset.index));
        testimonialTimer = setInterval(nextTestimonial, 5000);
      });
    });
    testimonialTimer = setInterval(nextTestimonial, 5000);
  }

  // ---- Cookie Consent ----
  var cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('rwt_cookie_consent')) {
    setTimeout(function () {
      cookieBanner.classList.add('show');
    }, 1500);
  }

  // ---- Current Year in Footer ----
  var yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Gallery Lightbox ----
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<button class="lightbox-close">&times;</button><div class="lightbox-content"></div>';
    document.body.appendChild(overlay);

    var lightboxContent = overlay.querySelector('.lightbox-content');
    var lightboxClose = overlay.querySelector('.lightbox-close');

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var media = item.querySelector('img, video');
        if (media) {
          if (media.tagName === 'VIDEO') {
            lightboxContent.innerHTML = '<video controls autoplay><source src="' + media.querySelector('source').src + '" type="video/mp4"></video>';
          } else {
            lightboxContent.innerHTML = '<img src="' + media.src + '" alt="' + (media.alt || '') + '">';
          }
          overlay.classList.add('active');
        }
      });
    });

    lightboxClose.addEventListener('click', function () {
      overlay.classList.remove('active');
      lightboxContent.innerHTML = '';
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        lightboxContent.innerHTML = '';
      }
    });
  }
});

// ---- Cookie Functions (global scope) ----
function acceptCookies() {
  localStorage.setItem('rwt_cookie_consent', 'accepted');
  var banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('show');
}

function declineCookies() {
  localStorage.setItem('rwt_cookie_consent', 'declined');
  var banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('show');
}
