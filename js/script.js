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
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to top
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

