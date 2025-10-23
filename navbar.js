console.log("Navbar JS loaded!");
alert("Navbar JS loaded!");



window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    console.error("Navbar not found!");
    return;
  }

  window.addEventListener("scroll", () => {
    console.log("Scrolling:", window.scrollY); // Debug log

    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
});
