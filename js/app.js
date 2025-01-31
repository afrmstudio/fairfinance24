document.addEventListener("DOMContentLoaded", function () {
    let currentLang = 'de';

    function updateContent() {
        const t = translations[currentLang];
        document.getElementById("home-title").textContent = t.home.welcome;
        document.getElementById("home-slogan").textContent = t.home.slogan;
        document.getElementById("about-title").textContent = t.about.title;
        document.getElementById("about-description").textContent = t.about.description;

        // Actualiza la bandera y el texto del botón de idioma
        const selectedLang = document.querySelector(`.language-dropdown li[data-lang="${currentLang}"]`);
        document.querySelector(".language-btn img").src = selectedLang.querySelector("img").src;
        document.querySelector(".language-btn").innerHTML = `<img src="${selectedLang.querySelector("img").src}" alt="${currentLang.toUpperCase()}"> ${selectedLang.textContent}`;
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
