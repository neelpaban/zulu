document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');
    const inlinePages = document.querySelectorAll('.inline-page');
    
    readMoreLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            inlinePages[index].style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.close-btn');

    closeButtons.forEach((btn, index) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            inlinePages[index].style.display = 'none';
        });
    });
});
