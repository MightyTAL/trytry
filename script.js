document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.chanel-nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.chanel-nav a[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
});
