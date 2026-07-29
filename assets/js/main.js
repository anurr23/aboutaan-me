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
    const backToTopBtn = document.getElementById('back-to-top');

    const handleScroll = () => {
        let scrollY = window.scrollY;

        // Navbar & Back to Top visibility
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.replace('border-transparent', 'border-white/10');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.replace('border-white/10', 'border-transparent');
        }

        if (scrollY > 500 && backToTopBtn) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
        } else if (backToTopBtn) {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        }

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 150;
            const sectionHeight = sec.offsetHeight;
            const sectionId = sec.getAttribute('id');
            
            // Special condition for the bottom of the page (Contact/Footer)
            const isBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;

            if ((scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) || (isBottom && sectionId === 'contact')) {
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

    // Smooth Scroll for Nav Links (Lenis Integration)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement && typeof lenis !== 'undefined') {
                lenis.scrollTo(targetElement, {
                    offset: -80,
                    duration: 1.2
                });
            } else if (targetElement) {
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately on load

        // GSAP ScrollTrigger Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Remove CSS transitions from reveal elements to prevent conflict
        const allReveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
        allReveals.forEach(el => {
            el.style.transition = 'none';
        });

        // Batch animation for reveal-up elements
        ScrollTrigger.batch(".reveal-up", {
            interval: 0.1, // time between each element's animation
            batchMax: 10,   // max elements per batch
            onEnter: batch => gsap.fromTo(batch, 
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", overwrite: true }
            ),
            start: "top 85%"
        });

        // Batch animation for reveal-left
        ScrollTrigger.batch(".reveal-left", {
            interval: 0.1,
            onEnter: batch => gsap.fromTo(batch,
                { autoAlpha: 0, x: -50 },
                { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", overwrite: true }
            ),
            start: "top 85%"
        });

        // Batch animation for reveal-right
        ScrollTrigger.batch(".reveal-right", {
            interval: 0.1,
            onEnter: batch => gsap.fromTo(batch,
                { autoAlpha: 0, x: 50 },
                { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", overwrite: true }
            ),
            start: "top 85%"
        });

        // Skill progress bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            ScrollTrigger.create({
                trigger: bar,
                start: "top 90%",
                onEnter: () => {
                    const width = bar.getAttribute('data-width');
                    if (width) bar.style.width = width;
                }
            });
        });
    } else {
        // Fallback if GSAP fails to load
        const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(element => {
                if (element.getBoundingClientRect().top < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }
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

// Glow Card Effect
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.glow-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Magnetic Button Effect
const magneticWraps = document.querySelectorAll('.magnetic-wrap');

magneticWraps.forEach(wrap => {
    const btn = wrap.querySelector('.magnetic-btn');
    
    wrap.addEventListener('mousemove', function(e) {
        const position = wrap.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        
        if (typeof gsap !== 'undefined' && btn) {
            gsap.to(btn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.6,
                ease: "power3.out"
            });
            
            const icon = btn.querySelector('i');
            if (icon) {
                gsap.to(icon, {
                    x: x * 0.2,
                    y: y * 0.2,
                    duration: 0.6,
                    ease: "power3.out"
                });
            }
        }
    });

    wrap.addEventListener('mouseleave', function() {
        if (typeof gsap !== 'undefined' && btn) {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
            
            const icon = btn.querySelector('i');
            if (icon) {
                gsap.to(icon, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        }
    });
});

// 3D Tilt Effect for Portfolio Cards
const tiltWraps = document.querySelectorAll('.tilt-wrap');

tiltWraps.forEach(wrap => {
    const card = wrap.querySelector('.tilt-card');
    
    wrap.addEventListener('mousemove', function(e) {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on cursor distance from center
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        if (typeof gsap !== 'undefined' && card) {
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                duration: 0.5,
                ease: "power2.out"
            });
            
            // Optional: parallax effect on inner content
            const content = card.querySelector('.portfolio-content');
            if (content) {
                gsap.to(content, {
                    z: 50,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        }
    });
    
    wrap.addEventListener('mouseleave', function() {
        if (typeof gsap !== 'undefined' && card) {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
            
            const content = card.querySelector('.portfolio-content');
            if (content) {
                gsap.to(content, {
                    z: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        }
    });
});