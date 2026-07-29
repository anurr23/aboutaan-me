const fs = require('fs');

let js = fs.readFileSync('assets/js/main.js', 'utf8');
const oldRevealCodeRegex = /\/\/ Scroll reveal animation[\s\S]*?revealOnScroll\(\); \/\/ Trigger once on load/g;

const newRevealCode = `    // GSAP ScrollTrigger Animations
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
    }`;

if (js.match(oldRevealCodeRegex)) {
    js = js.replace(oldRevealCodeRegex, newRevealCode);
    fs.writeFileSync('assets/js/main.js', js);
    console.log('Replaced reveal logic with GSAP in main.js');
} else {
    console.log('Could not find reveal logic to replace in main.js');
}
