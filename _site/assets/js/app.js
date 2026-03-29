document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    console.log(`Switching to ${newTheme} mode`);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
});