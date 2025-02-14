document.addEventListener('DOMContentLoaded', function() {
    const filmItems = document.querySelectorAll('.film-item');

    filmItems.forEach(item => {
        const popup = item.querySelector('.popup');
        const img = item.querySelector('img');

        item.addEventListener('mouseover', () => {
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.opacity = '1';
                popup.style.transform = 'scale(1)';
            }, 10);
            img.style.filter = 'grayscale(10%)';
        });

        item.addEventListener('mouseout', () => {
            setTimeout(() => {
                popup.style.opacity = '0';
                popup.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 300);
            }, 10);
            img.style.filter = 'none';
        });
    });
});
