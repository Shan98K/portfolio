const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const container = document.getElementById("video-trigger");

const frameCount = 897;
const currentFrame = (index) =>
    `assets/intro-Video/intro-Video-${String(index).padStart(3, "0")}.jpg`;

const images = [];

// Preload
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
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

// THE FIX: Calculate scroll progress relative ONLY to the container
window.addEventListener("scroll", () => {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const btn = document.querySelector(".resumeBtn");

    // SYNC THE BUTTON: 
    // It should only be 'active' while the video is actually locked and playing.
    if (rect.top <= 0 && rect.bottom >= windowHeight) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }

    // ANIMATION LOGIC:
    if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalScrollable = container.offsetHeight - windowHeight;
        const progress = Math.abs(rect.top) / totalScrollable;

        const frameIndex = Math.max(
            1,
            Math.min(frameCount, Math.floor(progress * (frameCount - 1)) + 1)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    }
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(1);
}

window.addEventListener("resize", resizeCanvas);
images[0].onload = resizeCanvas;
resizeCanvas();