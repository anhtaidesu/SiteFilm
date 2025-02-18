$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true
    });

    let timeout;
    const bounceTimeout = 20; // bounce
    const autoScrollTimeout = 2000; // Time out

    function triggerBounceEffect() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            $('.slick-current img').addClass('bounce');
            setTimeout(function() {
                $('.slick-current img').removeClass('bounce');
            }, 500); // Ani time
        }, bounceTimeout);
    }

    function startAutoScroll() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            $('.slider').slick('slickNext');
            startAutoScroll();
        }, autoScrollTimeout);
    }

    triggerBounceEffect(); // Trigger Bounce
    startAutoScroll(); // Trigger Auto

    $('.slider').on('swipe', function(event, slick, direction){
        clearTimeout(timeout);
        triggerBounceEffect();
        startAutoScroll();
    });

    $('.left-zone').on('click', function() {
        $('.slider').slick('slickPrev');
        clearTimeout(timeout);
        triggerBounceEffect();
        startAutoScroll();
    });

    $('.right-zone').on('click', function() {
        $('.slider').slick('slickNext');
        clearTimeout(timeout);
        triggerBounceEffect();
        startAutoScroll();
    });

    $('.slider').on('mouseover', function() {
        clearTimeout(timeout);
    });

    $('.slider').on('mouseout', function() {
        triggerBounceEffect();
        startAutoScroll();
    });
});