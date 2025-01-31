document.addEventListener("DOMContentLoaded", function () {
    let currentLang = 'de';

    function updateContent() {
        const t = translations[currentLang];

        document.getElementById("home-title").textContent = t.home.welcome;
        document.getElementById("home-slogan").textContent = t.home.slogan;
        document.getElementById("about-title").textContent = t.about.title;
        document.getElementById("about-description").textContent = t.about.description;

        // 📌 Actualizar los servicios con las traducciones correctas
        document.getElementById("service-consulting").textContent = t.home.services.consulting;
        document.getElementById("service-realEstate").textContent = t.home.services.realEstate;
        document.getElementById("service-finance").textContent = t.home.services.finance;
    }

    document.querySelectorAll(".language-dropdown li").forEach(item => {
        item.addEventListener("click", function () {
            currentLang = this.getAttribute("data-lang");
            updateContent();
        });
    });

    updateContent();
    document.getElementById("year").textContent = new Date().getFullYear();
});
