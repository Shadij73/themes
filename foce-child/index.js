// Sélectionne le bouton du menu burger et l'élément de navigation dans le DOM.
const burgerButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("nav");

// Ajoute un écouteur d'événement sur le bouton du menu burger pour déclencher la fonction toggleNav lors d'un clic.
burgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    // La fonction toggleNav ajoute ou supprime la classe 'active' du bouton burger et de l'élément de navigation,
    // ce qui est généralement utilisé pour contrôler leur affichage ou leur style en CSS.
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

// ******************* GESTION DU MENU BURGER ******************* //
// Ajout d'une classe pour gérer l'ouverture et fermeture du menu
// Ajout d'un écouteur d'événement sur un élément ayant la classe 'toggle',
// pour ajouter ou supprimer la classe 'open' du corps du document.
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
});

// ******************* Swiper init ******************* //
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Enable pagination bullet clicks
    },
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesOffsetBefore: 500,
});

// ******************* Déplacement des nuages au scroll ******************* //

const littleCloud = document.querySelector('.little-cloud');
const bigCloud = document.querySelector('.big-cloud');

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // La position actuelle du scroll
    const totalHeight = document.body.scrollHeight - window.innerHeight; // Hauteur totale de défilement possible
    const scrollRatio = scrollPosition / totalHeight; // Ratio de défilement actuel

    const distanceDeplacementLittleCloud = 1200; // Distance maximale de déplacement pour le petit nuage
    const distanceDeplacementBigCloud = 1000; // Distance maximale de déplacement pour le gros nuage

    const littleCloudMove = distanceDeplacementLittleCloud - (scrollRatio * distanceDeplacementLittleCloud);
    const bigCloudMove = distanceDeplacementBigCloud - (scrollRatio * distanceDeplacementBigCloud);

    if (littleCloud) {
        littleCloud.style.transform = `translateX(${littleCloudMove}px)`; // Déplacement du petit nuage
    }
    if (bigCloud) {
        bigCloud.style.transform = `translateX(${bigCloudMove}px)`; // Déplacement du gros nuage
    }
});

// ******************* Effet de parallaxe sur la bannière ******************* //

const effetParallaxe = document.querySelector(".banner_logo");

window.addEventListener("scroll", () => {
    const scrollenY = window.scrollY; // Position de défilement verticale
    const maxTranslationY = 240; // Translation maximale autorisée sur l'axe Y (240 pixels)

    if (scrollenY <= maxTranslationY) {
        effetParallaxe.style.transform = `translateY(${scrollenY}px)`; // Déplacement vertical de l'élément '.banner_logo'
    }
});
