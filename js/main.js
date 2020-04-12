$(document).ready(function () {
    // Variabili
    var buttonLeft = $('.button-left');
    var buttonRight = $('.button-right');

    buttonRight.click(nextImg);
    buttonLeft.click(previousImg);
    

    // Permetto input left-right da tastiera
    $(document).keydown(function(event) {
        if (event.keyCode == 39) {
            nextImg()
        } else if (event.keyCode == 37) {
            previousImg();
        }
    });

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

        if ($('.controller-dot.selected-dot').hasClass('selected-dot') && $('.controller-dot.selected-dot').hasClass('last-dot') == false) {
            $('.controller-dot.selected-dot').removeClass('selected-dot').addClass('not-selected-dot').next().addClass('selected-dot').removeClass('not-selected-dot');
        } else if ($('.controller-dot.selected-dot').hasClass('last-dot')) {
            $('.controller-dot.selected-dot').removeClass('selected-dot').addClass('not-selected-dot');
            $('.controller-dot.first-dot').addClass('selected-dot').removeClass('not-selected-dot');
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

        if ($('.controller-dot.selected-dot').hasClass('selected-dot') && $('.controller-dot.selected-dot').hasClass('first-dot') == false) {
            $('.controller-dot.selected-dot').removeClass('selected-dot').addClass('not-selected-dot').prev().addClass('selected-dot').removeClass('not-selected-dot');
        } else if ($('.controller-dot.selected-dot').hasClass('first-dot')) {
            $('.controller-dot.selected-dot').removeClass('selected-dot').addClass('not-selected-dot');
            $('.controller-dot.last-dot').addClass('selected-dot').removeClass('not-selected-dot');
        }
    }
}); // fine document ready