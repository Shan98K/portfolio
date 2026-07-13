const magnets = document.querySelectorAll(".magnetic");

magnets.forEach((magnet) => {

    magnet.addEventListener("mousemove", (e) => {

        const rect = magnet.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(magnet, {
            x: x * 0.35,
            y: y * 0.35,
            duration: 0.35,
            ease: "power3.out"
        });

    });

    magnet.addEventListener("mouseleave", () => {

        gsap.to(magnet, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.35)"
        });

    });

});