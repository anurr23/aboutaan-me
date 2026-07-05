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

    // Navbar scroll effect & Scroll Spy
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinksDesktop = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.mobile-nav-link');

    const handleScroll = () => {
        let scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.replace('border-transparent', 'border-white/10');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.replace('border-white/10', 'border-transparent');
        }

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 150;
            const sectionHeight = sec.offsetHeight;
            const sectionId = sec.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                // Desktop Links
                navLinksDesktop.forEach(link => {
                    link.classList.remove('active', 'text-brand-400', 'hover:text-brand-300', 'after:bg-brand-400', 'after:scale-x-100');
                    link.classList.add('text-gray-300', 'hover:text-white', 'after:bg-white', 'after:scale-x-0');
                    
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.remove('text-gray-300', 'hover:text-white', 'after:bg-white', 'after:scale-x-0');
                        link.classList.add('active', 'text-brand-400', 'hover:text-brand-300', 'after:bg-brand-400', 'after:scale-x-100');
                    }
                });

                // Mobile Links
                navLinksMobile.forEach(link => {
                    link.classList.remove('text-brand-400', 'bg-brand-500/10');
                    link.classList.add('text-gray-300', 'hover:text-white', 'hover:bg-white/5');
                    
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.remove('text-gray-300', 'hover:text-white', 'hover:bg-white/5');
                        link.classList.add('text-brand-400', 'bg-brand-500/10');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately on load

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

// Certificate Lightbox
const certData = [
    { src: 'assets/images/certificate/Certificate - Muhammad Anurohim.png', caption: 'SAP Business One — Certificate of Appreciation (May 2024)' },
    { src: 'assets/images/certificate/photo.png', caption: 'Huawei ICT Academy — Certificate of Completion (April 2026)' },
];
let currentCertIndex = 0;

function openLightbox(index) {
    currentCertIndex = index;
    const lightbox = document.getElementById('cert-lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.src = certData[index].src;
    caption.textContent = certData[index].caption;
    
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event, forceClose = false) {
    if (forceClose || event.target.id === 'cert-lightbox') {
        const lightbox = document.getElementById('cert-lightbox');
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    event.stopPropagation();
    currentCertIndex = (currentCertIndex + direction + certData.length) % certData.length;
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = certData[currentCertIndex].src;
        caption.textContent = certData[currentCertIndex].caption;
        img.style.opacity = '1';
    }, 150);
}

// Keyboard support for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('cert-lightbox');
    if (lightbox.classList.contains('hidden')) return;
    
    if (e.key === 'Escape') closeLightbox(e, true);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});