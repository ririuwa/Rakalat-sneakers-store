// Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.toggle('active');
        });

        // Simple animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const gridItems = document.querySelectorAll('.grid-item, .product-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            gridItems.forEach(item => {
                item.style.opacity = 0;
                item.style.transform = 'translateY(20px)';
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(item);
            });

            //Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchors => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - 100, 
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                document.getElementById('nav-menu').classList.remove('active');
            }
        }
    });
});
        });