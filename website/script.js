/* ═══════════════════════════════════════════════
   VIRAJ GHODVINDE — PORTFOLIO SCRIPT
   Features: Navbar, Scroll Reveal, Active Links,
   Mobile Menu, Form Handler
   ═══════════════════════════════════════════════ */

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initActiveNavLinks();
  initMobileMenu();
});

/* ══════════════════════════════════════
   NAVBAR — sticky + scroll shadow
══════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ══════════════════════════════════════
   ACTIVE NAV LINK — highlight on scroll
══════════════════════════════════════ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navH = 80;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      rootMargin: `-${navH}px 0px -55% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ══════════════════════════════════════
   SCROLL REVEAL — fade + slide in
══════════════════════════════════════ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  // Hero elements should be visible immediately
  const heroReveals = document.querySelectorAll('.hero .reveal');
  // Stagger them in on load
  heroReveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 + i * 120);
  });

  // All other sections use IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.closest('.hero')) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach((el) => {
    // Don't observe hero elements (handled above)
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}

/* ══════════════════════════════════════
   MOBILE MENU — hamburger toggle
══════════════════════════════════════ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on mobile link click
  const mobLinks = document.querySelectorAll('.mob-link');
  mobLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

/* ══════════════════════════════════════
   CONTACT FORM — simple feedback
══════════════════════════════════════ */
function handleFormSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  if (!note) return;

  // Simulate sending (no real backend)
  note.textContent = '✓ Thanks! Message received. I\'ll get back to you soon.';
  note.style.color = '#10b981';

  // Clear inputs
  document.querySelectorAll('.form-input').forEach((input) => {
    input.value = '';
  });

  // Clear note after 5s
  setTimeout(() => {
    note.textContent = '';
  }, 5000);
}

/* ══════════════════════════════════════
   SMOOTH SCROLL for anchor links
══════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
