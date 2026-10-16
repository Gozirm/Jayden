// ============================================================
// DO NOT TOUCH THIS FILE UNLESS YOU KNOW WHAT YOU'RE DOING.
// This controls the mobile menu and the fade-in effect as you
// scroll. Editing it may break your site.
// ============================================================

document.documentElement.classList.add("js");

// ---- Mobile menu (hamburger) ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function setMenu(open) {
  navToggle.classList.toggle("open", open);
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("open"));
  });

  // Close the menu when any link inside it is tapped
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Close the menu if the screen is resized back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setMenu(false);
  });
}

// ---- Fade-in on scroll ----
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((el) => observer.observe(el));
} else {
  // Older browsers: just show everything
  revealItems.forEach((el) => el.classList.add("visible"));
}

// ---- Footer year updates itself ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
