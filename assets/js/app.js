$(document).ready(function () {
    function updateCutSize() {
        $('.upper-cut').attr('style', 'border-right-width:' + $('.upper-cut').parent().width() + 'px')
        $('.lower-cut').attr('style', 'border-left-width:' + $('.upper-cut').parent().width() + 'px')
    }

    function updateNavbarBackground() {
        var hasNavigationActive = $('#navigation-bar').attr('style') !== "display: none;" && Foundation.MediaQuery.current === 'small'
        if (window.scrollY > 100) {
            $('.page-header').addClass('active');
            $('.page-header').addClass('hide-status-bar');
        } else {
            if (!hasNavigationActive) {
                $('.page-header').removeClass('active');
            }
            $('.page-header').removeClass('hide-status-bar');
        }
    }

    function updateNavbarBackgroundOnMenuToggle() {
        if (window.scrollY <= 100) {
            if ($('.page-header').hasClass('active')) {
                $('.page-header').removeClass('active');
            } else {
                $('.page-header').addClass('active');
            }
        }
    }

    $(document).foundation();

    $('.header-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplayHoverPause: true,
    });

    $('.menu-toggle').on('click', updateNavbarBackgroundOnMenuToggle);

    updateCutSize();
    updateNavbarBackground();

    window.addEventListener('resize', updateCutSize, false);
    window.addEventListener('resize', updateNavbarBackground, false);
    window.addEventListener('scroll', updateNavbarBackground, false);
})
