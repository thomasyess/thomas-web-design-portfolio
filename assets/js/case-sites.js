const menuButton = document.querySelector("[data-menu]");
const navigation = document.querySelector("[data-nav]");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-faq]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("[data-language].active")?.classList.remove("active");
    button.classList.add("active");
    document.documentElement.lang = button.dataset.language;
  });
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const confirmation = form.querySelector(".form-confirmation");
    if (confirmation) confirmation.hidden = false;
  });
});
