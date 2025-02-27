const thirdEdition = document.querySelector('.art-edition:nth-of-type(3)');
const secondEdition = document.querySelector('.art-edition:nth-of-type(2)');
const buttonEdition = document.querySelectorAll('.button__edition');
const divEdition = document.querySelector('.div_button_edition');
const imgExpPros = document.querySelectorAll('.exp_pro');
const artExpPros = document.querySelector('.exp');

function handleResize() {
    if (window.innerWidth < 1280) { // Seuil en pixels
        thirdEdition.classList.add("hidden");
        divEdition.classList.remove("hidden");
    } else {
        thirdEdition.classList.remove("hidden");
        divEdition.classList.add("hidden");
    }
    if (window.innerWidth < 1020) { // Seuil en pixels
        for (const imgExpPro of imgExpPros) {
            imgExpPro.classList.add("hidden");
        }
        artExpPros.classList.remove("hidden");

    } else {
        imgExpPros[0].classList.remove("hidden");
        imgExpPros[1].classList.remove("hidden");
        artExpPros.classList.add("hidden");
    }
    if (window.innerWidth < 767) {
        secondEdition.classList.add("hidden");
        buttonEdition[2].classList.remove("hidden");
    } else {
        secondEdition.classList.remove("hidden");
        buttonEdition[2].classList.add("hidden");
    }
}


handleResize();

window.addEventListener("resize", handleResize);
