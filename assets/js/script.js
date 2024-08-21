document.addEventListener('DOMContentLoaded', () => {
    const toggleContents = document.querySelectorAll('.toggle-content');
    
    toggleContents.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;

            if (content.classList.contains('hide')) {
                content.classList.remove('hide');
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
                content.classList.add('hide');
            }
        });
    });
});
