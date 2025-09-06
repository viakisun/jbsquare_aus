document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio page loaded and scripts are running.");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Optional: Add a simple animation to project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ease-out forwards`;
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Add keyframes for the animation in the CSS
const styleSheet = document.styleSheets[0];
const keyframes =
`@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
