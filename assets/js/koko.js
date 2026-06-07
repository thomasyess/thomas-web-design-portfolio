const menu = document.querySelector(".k-menu");
const links = document.querySelector(".k-links");

menu?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

links?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".category-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".category-tabs .active")?.classList.remove("active");
    button.classList.add("active");
  });
});

document.querySelectorAll(".location-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.querySelector(".location-card.active")?.classList.remove("active");
    card.classList.add("active");
  });
});
