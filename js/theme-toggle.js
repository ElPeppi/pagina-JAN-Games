const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    if (document.body.classList.contains("neon")) {
      document.body.classList.remove("neon");
      document.body.classList.add("elegant");
      themeToggle.textContent = "🌙 Neon";
    } else {
      document.body.classList.remove("elegant");
      document.body.classList.add("neon");
    }
  } else {
    document.body.classList.remove("neon", "elegant");
    themeToggle.textContent = "🌙";
  }
});
