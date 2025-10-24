 window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    console.error("Navbar not found!");
    return;
  }

  console.log("Navbar script ready.");

  window.addEventListener("scroll", () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
      console.log("Navbar SHRUNK");
    } else {
      navbar.classList.remove("shrink");
      console.log("Navbar NORMAL");
    }
  });
});
