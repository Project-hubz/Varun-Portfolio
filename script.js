document.addEventListener('DOMContentLoaded', function() {
    

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
// Refresh page when clicking on navbar brand
var navbarBrand = document.getElementById('navbar-brand');
navbarBrand.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
});
    });
