const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 400;
        if (window.scrollY >= sectionTop) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
