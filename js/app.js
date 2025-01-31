document.addEventListener("DOMContentLoaded", function () {
    let currentLang = 'de';

    function updateContent() {
        const t = translations[currentLang];

        document.getElementById("nav-home").textContent = t.nav.home;
        document.getElementById("nav-about").textContent = t.nav.about;
        document.getElementById("home-title").textContent = t.home.welcome;
        document.getElementById("home-slogan").textContent = t.home.slogan;
        document.getElementById("about-title").textContent = t.about.title;
        document.getElementById("about-description").textContent = t.about.description;
    }

    document.getElementById("nav-home").addEventListener("click", () => {
        document.getElementById("home-section").classList.add("visible");
        document.getElementById("about-section").classList.remove("visible");
    });

    document.getElementById("nav-about").addEventListener("click", () => {
        document.getElementById("home-section").classList.remove("visible");
        document.getElementById("about-section").classList.add("visible");
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", function () {
            currentLang = this.getAttribute("data-lang");
            updateContent();
        });
    });

    updateContent();
    document.getElementById("year").textContent = new Date().getFullYear();
});
