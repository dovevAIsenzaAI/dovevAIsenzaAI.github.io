const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const accessTools = document.querySelector(".access-tools");

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks?.classList.toggle("is-open", !isOpen);
  accessTools?.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navLinks?.classList.remove("is-open");
    accessTools?.classList.remove("is-open");
  });
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    if (action === "contrast") {
      body.classList.toggle("high-contrast");
      button.setAttribute("aria-pressed", String(body.classList.contains("high-contrast")));
    }
    if (action === "font") {
      body.classList.toggle("large-text");
      button.setAttribute("aria-pressed", String(body.classList.contains("large-text")));
    }
  });
});

const updateHeader = () => {
  header?.setAttribute("data-elevated", String(window.scrollY > 8));
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
