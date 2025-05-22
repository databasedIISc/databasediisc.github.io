(async () => {
  // Remove loader
  unload();
})();

document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle("active");
    toggle.querySelector(".material-symbols-outlined").textContent =
      submenu.classList.contains("active") ? "expand_less" : "expand_more";
  });
});