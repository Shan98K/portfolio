const cursor = document.getElementById('cursor');
const cursorOutline = document.getElementById('cursor-outline');

// Move the cursors
window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    // Direct follow for the inner dot
    gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0, // Instant
        xPercent: -50, // Perfectly centers the div
        yPercent: -50
    });

    // Smooth follow for the outline
    gsap.to(cursorOutline, {
        x: x,
        y: y,
        duration: 0.15, // Smooth lag effect
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out"
    });
});

// Hover Effects
const interactiveElements = document.querySelectorAll('a, .bento-item, button, .interactive-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        // Hide small dot and grow outline
        gsap.to(cursor, { scale: 0, duration: 0.2 });
        gsap.to(cursorOutline, { 
            scale: 2, 
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: add a slight fill
            duration: 0.3 
        });
    });
    
    el.addEventListener('mouseleave', () => {
        // Bring back the dot and reset outline
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(cursorOutline, { 
            scale: 1, 
            backgroundColor: "transparent", 
            duration: 0.3 
        });
    });
});