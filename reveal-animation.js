// reveal-animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger (Good practice to ensure it's loaded)
    gsap.registerPlugin(ScrollTrigger);

    // 1. MAIN HEADERS (H2)
    document.querySelectorAll('h2').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 90%",
                toggleActions: "play none none none",
                fastScrollEnd: true, // Prevents logic loops on fast scrolling
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            clearProps: "all" // Cleans up transforms after animation finishes
        });
    });

    // 2. PARAGRAPH TAGS
    document.querySelectorAll('section p, .hero-text p').forEach((p) => {
        gsap.from(p, {
            scrollTrigger: {
                trigger: p,
                start: "top 92%",
                once: true // Ensures it doesn't try to recalculate multiple times
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
            clearProps: "all"
        });
    });

    // 3. PROJECT VISUALS / BENTO ITEMS
    document.querySelectorAll('.project-visual, .bento-item').forEach((visual) => {
        gsap.from(visual, {
            scrollTrigger: {
                trigger: visual,
                start: "top 85%",
            },
            x: 150,
            rotation: 5,
            opacity: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "expo.out",
            clearProps: "all"
        });
    });

    // 4. TIMELINE ITEMS
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: "top 80%",
        },
        y: -75,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
    });

    // 5. METRIC CARDS
    gsap.from('.metric-card', {
        scrollTrigger: {
            trigger: '.metrics-grid',
            start: "top 90%",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        clearProps: "all"
    });

    // 7. FOOTER REVELATION
    gsap.from(".footer-big-text", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
        },
        y: 100, // Reduced from 200 to prevent massive layout shifts
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        clearProps: "all"
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
        ease: "power2.out",
        clearProps: "all"
    });

    // Refresh ScrollTrigger after all initial positions are set
    ScrollTrigger.refresh();
});