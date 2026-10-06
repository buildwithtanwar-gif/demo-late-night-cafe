// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuToggle.textContent =
    nav.classList.contains("open") ? "✕" : "☰";
});


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});


// ===============================
// MENU FILTER
// ===============================

const filterButtons = document.querySelectorAll(".menu-tabs button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    menuCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }

    });

  });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(8,7,6,.94)";
  } else {
    navbar.style.background = "rgba(11,10,9,.72)";
  }

});


// ===============================
// SMOOTH BUTTON FEEDBACK
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});