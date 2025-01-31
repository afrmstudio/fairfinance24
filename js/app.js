document.addEventListener("DOMContentLoaded", function () {
    let currentLang = 'de';

    function updateContent() {
        const t = translations[currentLang];

        // 📌 Actualizar Home
        document.getElementById("home-title").textContent = t.home.welcome;
        document.getElementById("home-main-title").textContent = t.home.title;
        document.getElementById("home-slogan").textContent = t.home.slogan;
        document.getElementById("service-consulting").textContent = t.home.services.consulting;
        document.getElementById("service-realEstate").textContent = t.home.services.realEstate;
        document.getElementById("service-finance").textContent = t.home.services.finance;

        // 📌 Actualizar About Us
        document.getElementById("about-title").textContent = t.about.title;
        document.getElementById("about-description").textContent = t.about.description;
        document.getElementById("about-latin").textContent = t.about.latinText;
        document.getElementById("about-image").src = t.about.image;

        // 📌 Actualizar botón de idioma con bandera
        const selectedLang = document.querySelector(`.language-dropdown li[data-lang="${currentLang}"]`);
        document.querySelector(".language-btn img").src = selectedLang.querySelector("img").src;
        document.querySelector(".language-btn").innerHTML = `<img src="${selectedLang.querySelector("img").src}" alt="${currentLang.toUpperCase()}"> ${selectedLang.textContent}`;
    }

    // 📌 Control de visibilidad entre Home y About Us
    document.getElementById("nav-home").addEventListener("click", () => {
        document.getElementById("home-section").classList.remove("hidden");
        document.getElementById("about-section").classList.add("hidden");
    });

    document.getElementById("nav-about").addEventListener("click", () => {
        document.getElementById("home-section").classList.add("hidden");
        document.getElementById("about-section").classList.remove("hidden");
    });

    // 📌 Cambiar idioma al hacer clic en el menú desplegable
    document.querySelectorAll(".language-dropdown li").forEach(item => {
        item.addEventListener("click", function () {
            currentLang = this.getAttribute("data-lang");
            updateContent();
        });
    });

    updateContent();
    document.getElementById("year").textContent = new Date().getFullYear();
});
