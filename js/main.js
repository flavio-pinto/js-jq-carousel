$(document).ready(function () {
    // Variabili
    var buttonLeft = $('.button-left');
    var buttonRight = $('.button-right');
    var imgContainer = $('.img-container');

    buttonRight.click(nextImg);
    buttonLeft.click(previousImg);
}); // fine document ready



/* Funzioni */

// Funzione per pulsante immagine successiva
function nextImg() {
    var activeImg = $('.img-container.show');
    activeImg.removeClass('show');
    if (activeImg.hasClass('last-img')) {
        $('.img-container.first-img').addClass('show');
    } else {
        activeImg.next().addClass('show');
    }
}

// Funzione per pulsante immagine successiva
function previousImg() {
    var activeImg = $('.img-container.show');
    activeImg.removeClass('show');
    if (activeImg.hasClass('first-img')) {
        $('.img-container.last-img').addClass('show')
    } else {
        activeImg.prev().addClass('show');
    }
}