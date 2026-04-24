async function initReviews() {
    try {
        const response = await fetch('./reviews.json');
        const reviews = await response.json();
        const track = document.getElementById('review-track');
        
        if (!reviews.length) return;

        // Function to create card HTML
        const createCard = (item) => {
            const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
            return `
                <div class="review-card">
                    <div class="review-header">
                        <h4>${item.name}</h4>
                        <span>${item.project}</span>
                    </div>
                    <div class="stars">${stars}</div>
                    <p class="review-text">"${item.review}"</p>
                </div>
            `;
        };

        // Render the reviews twice for a seamless loop
        const content = reviews.map(item => createCard(item)).join('');
        track.innerHTML = content + content;

    } catch (error) {
        console.error("Marquee initialization failed:", error);
    }
}

document.addEventListener('DOMContentLoaded', initReviews);