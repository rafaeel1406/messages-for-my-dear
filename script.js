import { Analytics } from '@vercel/analytics';

// Inicialize o Analytics
Analytics({ projectId: 'prj_odA1kZtRdRzrCD8zhMopGoJTSn4U' });

document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 1300);
});
