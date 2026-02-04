const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    // 1. Toggle the class on the body
    document.body.classList.toggle("light");

    // 2. Update the icon
    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});