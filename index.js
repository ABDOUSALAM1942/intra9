const displayJoke = (jokeHTML) => {
    const myJoke = document.getElementById("myJoke");
    myJoke.innerHTML = jokeHTML;
};

// Données JSON intégrées dans votre code
const jsonData = {
    "name": "Y-Tech / Innovation",
    "description": "Favoris",
    "youtubeIcon": "images/youtube-icon.png",
    "githubIcon": "images/github-icon.png",
    "alibabaIcon": "images/alibaba-icon.png"
};

const getJokes = () => {
    // Utilisez les données JSON pour personnaliser le contenu HTML avec des icônes Font Awesome
    const htmlContent = `
        <p class="y">
            <a style="color: white" href="URL_DE_VOTRE_PAGE_WEB" target="_blank">
                <i class="fas fa-laptop"></i> <!-- Icône d'ordinateur -->
                ${jsonData.name}
            </a>
        </p>
        <p class="favo">
            <a style="color: white" href="URL_DE_VOTRE_PAGE_FAVORIS" target="_blank">
                <i class="fa-solid fa-link"></i> ${jsonData.description}
            </a>
        </p>
        <a href="https://www.facebook.com/votre-page-facebook" target="_blank">
            <i class="fab fa-facebook fa-2x" style="color: blue; margin-right: 35px;"></i> <!-- Icône Facebook -->
        </a>
        <a href="https://www.youtube.com/votre-chaine" target="_blank">
            <i class="fab fa-youtube fa-2x" style="color: red; margin-right: 35px;"></i> <!-- Icône YouTube -->
        </a>
        <a href="https://www.github.com/votre-repo" target="_blank">
            <i class="fab fa-github fa-2x" style="color: black; margin-right: 35px;"></i> <!-- Icône GitHub -->
        </a>
        <a href="https://www.alibaba.com/votre-boutique" target="_blank">
            <i class="fab fa-font-awesome fa-2x" style="color: orange; margin-right: 35px;"></i> <!-- Icône Alibaba -->
        </a>
    `;

    // Appelez la fonction displayJoke avec le contenu HTML personnalisé
    displayJoke(htmlContent);
};

window.addEventListener("load", () => {
    getJokes();
});

