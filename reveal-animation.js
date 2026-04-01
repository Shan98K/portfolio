// reveal-animations.js

// Wait for DOM and GSAP to be ready
document.addEventListener('DOMContentLoaded', () => {

    // 1. MAIN HEADERS (H2) - Slide from Left to Right
    // They start off-screen to the left and slide into position
    document.querySelectorAll('h2').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 90%", // Starts when header is near bottom of viewport
                toggleActions: "play none none none"
            },
            x: -100,          // Start 100px to the left
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });
    });

    // 2. PARAGRAPH TAGS - Fade Up
    // Subtle lift effect for body text
    document.querySelectorAll('section p, .hero-text p').forEach((p) => {
        gsap.from(p, {
            scrollTrigger: {
                trigger: p,
                start: "top 92%",
            },
            y: 30,            // Lift up from 30px
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.2        // Slight delay so header moves first
        });
    });

    // 3. PROJECT VISUALS / PICTURES - Slide Left from Right with Rotation
    // This gives that "shuffling" card effect
    document.querySelectorAll('.project-visual, .bento-item').forEach((visual) => {
        gsap.from(visual, {
            scrollTrigger: {
                trigger: visual,
                start: "top 85%",
            },
            x: 150,           // Come from the right
            rotation: 5,      // Slight tilt while entering
            opacity: 0,
            scale: 0.9,       // Grow into full size
            duration: 1.5,
            ease: "expo.out"
        });
    });

    // 4. TIMELINE ITEMS - Staggered Slide In
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: "top 80%",
        },
        y: -75,
        opacity: 0,
        stagger: 0.3,        // One after the other
        duration: 1,
        ease: "power3.out"
    });

    // 5. METRIC CARDS - Pop In
    gsap.from('.metric-card', {
        scrollTrigger: {
            trigger: '.metrics-grid',
            start: "top 90%",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
    // 7. FOOTER REVELATION
    // We target the big background text and the columns separately
    gsap.from(".footer-big-text", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
        },
        y: 200,      // Rises from deep below
        opacity: 0,
        duration: 2,
        ease: "power4.out"
    });

    gsap.from(".footer-col", {
        scrollTrigger: {
            trigger: ".footer-grid",
            start: "top 90%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".footer-bottom", {
        scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 98%",
        },
        opacity: 0,
        duration: 1.5,
        delay: 0.5
    });
});