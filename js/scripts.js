(() => {
  const header = document.querySelector(".site-header");
  const progress = document.getElementById("progressLine");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    header?.classList.toggle("scrolled", scrollTop > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;
  };

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  navToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
  });

  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add("visible"));
  }
})();
