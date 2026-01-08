function showSurprise() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.width = Math.random() * 15 + 5 + 'px';
            confettiPiece.style.height = Math.random() * 15 + 5 + 'px';
            confettiPiece.style.animationDelay = Math.random() * 0.5 + 's';
            confettiPiece.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            confettiContainer.appendChild(confettiPiece);
            confettiPiece.classList.add('animate');
            
            // Remove confetti piece after animation
            setTimeout(() => {
                confettiPiece.remove();
            }, 4000);
        }, i * 20);
    }
    
    // Show a special message
    const button = document.querySelector('.wish-button');
    const originalText = button.textContent;
    button.textContent = '🎊 Have an Amazing Day! 🎊';
    button.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 3000);
    
    // Play a fun animation on the cake
    const cake = document.querySelector('.cake');
    cake.style.animation = 'none';
    setTimeout(() => {
        cake.style.animation = 'rotate 0.5s ease-in-out 3';
    }, 10);
}

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    .sparkle {
        position: fixed;
        width: 5px;
        height: 5px;
        background: #ffd700;
        border-radius: 50%;
        pointer-events: none;
        animation: sparkleDisappear 1s ease-out forwards;
    }
    
    @keyframes sparkleDisappear {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);
