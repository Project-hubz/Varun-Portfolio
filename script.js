document.addEventListener('DOMContentLoaded', function() {
    // Back to top button
    var backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.id = 'back-to-top';
    backToTopButton.classList.add('btn', 'btn-primary');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for navigation links
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 56, // Adjust this value if needed
                behavior: 'smooth'
            });
        });
    });

    // Remove form input for contact section (optional)
    var contactForm = document.querySelector('#contact form');
    contactForm.innerHTML = '<p>For inquiries, please email me at <a href="mailto:your-email@example.com">your-email@example.com</a></p>';

    // Refresh page when clicking on navbar brand
    var navbarBrand = document.getElementById('navbar-brand');
    navbarBrand.addEventListener('click', function(e) {
        e.preventDefault();
        location.reload();
    });
});
