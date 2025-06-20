 // Fade-in animation on scroll
        function revealSections() {
            document.querySelectorAll('section').forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    sec.classList.add('visible');
                }
            });
        }
        window.addEventListener('scroll', revealSections);
        window.addEventListener('DOMContentLoaded', revealSections);

        // Smooth scroll for nav links (optional, since CSS scroll-behavior is set)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });