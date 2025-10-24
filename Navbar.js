// Select the navbar
const navbar = document.querySelector(".navbar");

// Function to shrink navbar on scroll
function handleNavbarScroll() {
  if (window.scrollY > 10) { // small threshold
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}

// Listen for scroll events
window.addEventListener("scroll", handleNavbarScroll);

// Run once in case page loads already scrolled
handleNavbarScroll();
