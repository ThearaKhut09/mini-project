(function () {
  const links = document.querySelectorAll("[data-nav]");
  if (!links.length) return;

  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const target = link.getAttribute("href");
    if (!target) return;
    if (target === current) {
      link.classList.add("text-[#FFC27A]", "font-semibold");
      link.classList.remove("text-white/90");
    } else {
      link.classList.remove("text-[#FFC27A]", "font-semibold");
      if (!link.classList.contains("hover:text-white")) {
        link.classList.add("text-white/90");
      }
    }
  });
})();
