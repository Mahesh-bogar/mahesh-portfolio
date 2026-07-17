const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 24;
  header.style.background = scrolled
    ? "rgba(11, 21, 19, 0.92)"
    : "linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent)";
  header.style.backdropFilter = scrolled ? "blur(18px)" : "none";
});
