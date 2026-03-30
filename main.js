// HERO ANIMATION
window.addEventListener("load", () => {
  document.querySelector(".hero").classList.add("show");
});

// REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if(link.getAttribute("href").startsWith("#")){
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    }
  });
});
const contactForm = document.getElementById("contact-form");
const feedback = document.querySelector(".form-feedback");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  feedback.style.display = "block";
  feedback.textContent = "Thanks! Your message has been sent ✨";

  // Reset form after 2 seconds
  setTimeout(() => {
    feedback.style.display = "none";
    contactForm.reset();
  }, 2500);
});





const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});



const progressCircle = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / height;

  const dashOffset = 125 - (125 * progress);
  progressCircle.style.strokeDashoffset = dashOffset;
});