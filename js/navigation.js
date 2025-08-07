// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Show mobile menu
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            
            // Add animation
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            
            // Trigger animation
            setTimeout(() => {
                mobileMenu.style.transition = 'all 0.2s ease-out';
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // Hide mobile menu
            mobileMenu.style.transition = 'all 0.2s ease-out';
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }, 200);
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mobileMenuToggle.contains(event.target) || mobileMenu.contains(event.target);
        
        if (!isClickInsideNav && !mobileMenu.classList.contains('hidden')) {
            // Close mobile menu
            mobileMenu.style.transition = 'all 0.2s ease-out';
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }, 200);
        }
    });

    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Header scroll effect - shrink header when scrolling
    const header = document.getElementById('header');
    const headerPadding = document.getElementById('header-padding');
    const headerContent = document.getElementById('header-content');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //  Shrink Effect khi Scroll
        if (scrollTop > 50) {
            // Thu nhỏ header khi cuộn xuống
            header.classList.add('shadow-md');
            headerPadding.classList.remove('py-4');
            headerPadding.classList.add('py-2');
            // headerContent.classList.remove('h-9');
            // headerContent.classList.add('h-8');
        } else {
            //  Mở rộng header khi ở top
            header.classList.remove('shadow-md');
            headerPadding.classList.remove('py-2');
            headerPadding.classList.add('py-4');
            // headerContent.classList.remove('h-8');
            // headerContent.classList.add('h-9');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });
    });
});








