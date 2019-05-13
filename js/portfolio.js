$(document).ready(function () {
    var clOffCanvas = function () {
        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function (e) {
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function (e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function (e) {
            if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                siteBody.removeClass('menu-is-open');
            }
        });
    };

    var hideFadeIn = function () {
        $('[fadeIn]').each(function (i) {
            $(this).css('opacity', '0');
        });
    };

    var fadeIn = function () {
        $('[fadeIn]').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('fade-up');
            }
        });
    }

    var fadeInScroll = function () {
        $(window).scroll(function () {
            fadeIn();
        });
    };

    $(".meter > span").each(function () {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).attr("per") + "%"
            }, 1200);
    });

    clOffCanvas();
    fadeInScroll();
    hideFadeIn();
    fadeIn();
});

function navigateToProject(id) {
    window.location = "project" + id + ".html";
}