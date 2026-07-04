document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => {
                    mobileMenu.classList.remove('scale-y-0');
                    mobileMenu.classList.add('scale-y-100');
                }, 10);
            } else {
                mobileMenu.classList.remove('scale-y-100');
                mobileMenu.classList.add('scale-y-0');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        });

        // Close menu on link click
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.remove('scale-y-100');
                mobileMenu.classList.add('scale-y-0');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.replace('border-transparent', 'border-white/10');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.replace('border-white/10', 'border-transparent');
        }
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    const skillBars = document.querySelectorAll('.skill-progress');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });

        skillBars.forEach(bar => {
            const elementTop = bar.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                const targetWidth = bar.getAttribute('data-width');
                if (targetWidth) {
                    bar.style.width = targetWidth;
                }
            }
        });
    };
    // -------------------------
    // Mouse Tracker Effect
    // -------------------------
    const mouseDot = document.getElementById('mouse-dot');
    const mouseRing = document.getElementById('mouse-ring');
    
    if (mouseDot && mouseRing) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let isHovering = false;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            mouseDot.style.opacity = '1';
            mouseRing.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            mouseDot.style.opacity = '0';
            mouseRing.style.opacity = '0';
        });

        const clickables = document.querySelectorAll('a, button, input, textarea, .group');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                mouseRing.classList.add('bg-brand-500/20', 'border-brand-400');
                mouseRing.classList.remove('border-brand-400/40');
            });
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                mouseRing.classList.remove('bg-brand-500/20', 'border-brand-400');
                mouseRing.classList.add('border-brand-400/40');
            });
        });

        const animateTracker = () => {
            // LERP for smooth trailing
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            mouseDot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
            
            const scale = isHovering ? 1.5 : 1;
            mouseRing.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${scale})`;
            
            requestAnimationFrame(animateTracker);
        };
        requestAnimationFrame(animateTracker);
    }

    // -------------------------
    // Typing Effect
    // -------------------------
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const words = ['Web App Developer', 'Frontend Enthusiast', 'UI/UX Explorer', 'Problem Solver'];
        let wordIndex = 0;
        let charIndex = words[0].length; // Start with the first word fully typed
        let isDeleting = true;
        
        const typeEffect = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at end of word
                typeSpeed = 1200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeEffect, typeSpeed);
        };
        
        // Initial pause before starting deletion
        setTimeout(typeEffect, 1200);
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});