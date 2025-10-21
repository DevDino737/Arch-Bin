window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");

  // safety check
  if (!navbar) return;

  // make sure we listen on the main document scroll
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  }, { passive: true });
});
