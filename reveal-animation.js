// reveal-animations.js

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- NEW: INITIAL LOAD ANIMATIONS (Nav & Hero) ---
    // These run immediately without needing to scroll
    const loadTl = gsap.timeline();
    
    loadTl.from("nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from(".hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.5"); // Starts slightly before nav finishes

    // --- NEW: SKILL TAGS STAGGER ---
    document.querySelectorAll('.tag-cloud').forEach((cloud) => {
        gsap.from(cloud.querySelectorAll('.tag'), {
            scrollTrigger: {
                trigger: cloud,
                start: "top 90%",
            },
            scale: 0,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            clearProps: "all"
        });
    });

    // --- NEW: PROJECT INFO REVEAL ---
    // Your original code animated the visuals, this handles the text side
    document.querySelectorAll('.project-info').forEach((info) => {
        gsap.from(info.children, {
            scrollTrigger: {
                trigger: info,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            clearProps: "all"
        });
    });

    // 1. MAIN HEADERS (H2) - [YOUR ORIGINAL CODE]
    document.querySelectorAll('h2').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 90%",
                toggleActions: "play none none none",
                fastScrollEnd: true,
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            clearProps: "all"
        });
    });

    // 2. PARAGRAPH TAGS - [YOUR ORIGINAL CODE]
    document.querySelectorAll('section p, .hero-text p').forEach((p) => {
        gsap.from(p, {
            scrollTrigger: {
                trigger: p,
                start: "top 92%",
                once: true 
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
            clearProps: "all"
        });
    });

    // 3. PROJECT VISUALS / BENTO ITEMS - [YOUR ORIGINAL CODE]
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

    // 4. TIMELINE ITEMS - [YOUR ORIGINAL CODE]
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

    // 5. METRIC CARDS - [YOUR ORIGINAL CODE]
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

    // 7. FOOTER REVELATION - [YOUR ORIGINAL CODE]
    gsap.from(".footer-big-text", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
        },
        y: 100, 
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

    ScrollTrigger.refresh();
});