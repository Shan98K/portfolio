const initScrollVideo = (config) => {
    const canvas = document.getElementById(config.canvasId);
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const container = document.getElementById(config.containerId);
    const images = [];

    // Preload Logic
    for (let i = 1; i <= config.frameCount; i++) {
        const img = new Image();
        // Dynamic path building based on the config object
        img.src = `assets/${config.folderName}/videoFrame-${String(i).padStart(3, "0")}.jpg`;
        images.push(img);
    }

    function renderFrame(index) {
        const img = images[index - 1];
        if (!img || !img.complete) return;

        const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
            img, 0, 0, img.width, img.height,
            centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
        );
    }

    window.addEventListener("scroll", () => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Button Logic (Only applies if a resumeBtn exists in this container)
        const btn = container.querySelector(".resumeBtn") || document.querySelector(".resumeBtn");
        
        if (rect.top <= 0 && rect.bottom >= windowHeight) {
            // Calculate progress 0 to 1
            const totalScrollable = container.offsetHeight - windowHeight;
            const progress = Math.abs(rect.top) / totalScrollable;

            const frameIndex = Math.max(
                1,
                Math.min(config.frameCount, Math.floor(progress * (config.frameCount - 1)) + 1)
            );

            requestAnimationFrame(() => renderFrame(frameIndex));
            if (btn && config.canvasId === "canvas") btn.classList.add("active");
        } else {
            if (btn && config.canvasId === "canvas") btn.classList.remove("active");
        }
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame(1);
    }

    window.addEventListener("resize", resizeCanvas);
    // Ensure the first frame renders once loaded
    images[0].onload = resizeCanvas;
    resizeCanvas();
};

// --- EXECUTE FOR BOTH SECTIONS ---

// 1. Intro Video
initScrollVideo({
    canvasId: "canvas",
    containerId: "video-trigger-intro",
    folderName: "intro-Video",
    frameCount: 500
});

// 2. Outro Video
initScrollVideo({
    canvasId: "canvas-outro", // Make sure this ID exists in your HTML
    containerId: "video-trigger-outro",
    folderName: "outro-Video",
    frameCount: 650
});