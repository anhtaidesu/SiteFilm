$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true
    });

    $('.left-zone').on('click', function() {
        $('.slider').slick('slickPrev');
    });

    $('.right-zone').on('click', function() {
        $('.slider').slick('slickNext');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        const submenu = item.querySelector('.submenu');
        item.addEventListener('mouseover', () => {
            if (submenu) {
                submenu.style.display = 'block';
                setTimeout(() => {
                    submenu.style.opacity = '1';
                    submenu.style.maxHeight = '200px';
                }, 10);
            }
        });
        item.addEventListener('mouseout', () => {
            if (submenu) {
                setTimeout(() => {
                    submenu.style.opacity = '0';
                    submenu.style.maxHeight = '0';
                    setTimeout(() => {
                        submenu.style.display = 'none';
                    }, 300);
                }, 10);
            }
        });
        submenu.addEventListener('mouseover', () => {
            submenu.style.opacity = '1';
            submenu.style.maxHeight = '200px';
        });
        submenu.addEventListener('mouseout', () => {
            setTimeout(() => {
                submenu.style.opacity = '0';
                submenu.style.maxHeight = '0';
                setTimeout(() => {
                    submenu.style.display = 'none';
                }, 300);
            }, 10);
        });
    });
});