const modal = document.querySelector('#contact-modal');
const openBtn = document.querySelector('a[href="mailto:harsh98kmailbox@gmail.com"]'); // Targeting your Nav link
const closeBtn = document.querySelector('.close-modal');

// OPEN MODAL
openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Set initial state
    gsap.set(modal, { display: 'flex', opacity: 0 });
    gsap.set(".modal-content", { scale: 0.8, y: 50 });
    gsap.set(".contact-form > *", { opacity: 0, y: 20 });

    const tl = gsap.timeline();
    
    tl.to(modal, { opacity: 1, duration: 0.4 })
      .to(".modal-content", { 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "expo.out" 
      }, "-=0.2")
      .to(".contact-form > *", { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.4 
      }, "-=0.3");
});

// CLOSE MODAL
const closeModal = () => {
    gsap.to(modal, { 
        opacity: 0, 
        duration: 0.3, 
        onComplete: () => modal.style.display = 'none' 
    });
};

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });