const cursor = document.getElementById('cursor');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Direct follow for the dot
    cursor.style.transform = `translate(${posX}px, ${posY}px)`;

    // Outline follow with a tiny delay (via CSS transition)
    // We subtract 20 and 4 to center the divs on the tip of the pointer
    cursor.style.transform = `translate(${posX - 8.5}px, ${posY - 8.5}px)`;
    cursorOutline.style.transform = `translate(${posX - 20}px, ${posY - 20}px)`;
});

// Add expansion effect on interactive elements
const interactiveElements = document.querySelectorAll('a, .bento-item, button');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
        cursor.style.transform += ' scale(0)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
        cursor.style.transform = cursor.style.transform.replace(' scale(0)', '');
    });
});