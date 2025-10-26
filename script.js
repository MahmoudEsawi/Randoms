const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "💖 Yay! Heba, being with you is my biggest blessing. I love you so much! 💖";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    
    // Create floating hearts
    createFloatingHearts();
});

// No button stays in place so it can be clicked

// Show message when No button is clicked
noBtn.addEventListener("click", () => {
    question.innerHTML = "Fuck you";
    question.style.color = "#cc0000";
    question.style.fontSize = "42px";
    question.style.animation = "shake 0.5s ease-in-out infinite";
    question.style.textShadow = "0 0 10px #ff0000, 0 0 20px #ff0000";
    
    // Change entire page to red/angry theme
    document.body.style.background = "linear-gradient(135deg, #8b0000 0%, #cc0000 50%, #ff0000 100%)";
    document.body.style.animation = "redPulse 1s ease-in-out infinite";
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.background = "rgba(0, 0, 0, 0.9)";
    wrapper.style.border = "3px solid #ff0000";
    wrapper.style.boxShadow = "0 0 30px #ff0000, inset 0 0 30px #cc0000";
    
    gif.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    
    // Create floating "I will kill you" messages
    createFloatingKillMessages();
});

// Create floating "I will kill you" messages
function createFloatingKillMessages() {
    const messages = ['I WILL KILL YOU', 'DIE', 'DEATH', '💀', '🔥', '⚡', 'KILL', 'EVIL'];
    const body = document.body;
    
    // Continuously create floating messages
    const interval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const message = document.createElement('div');
                message.className = 'floating-kill-message';
                message.textContent = messages[Math.floor(Math.random() * messages.length)];
                message.style.left = Math.random() * 100 + '%';
                message.style.fontSize = (Math.random() * 30 + 20) + 'px';
                message.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
                body.appendChild(message);
                
                setTimeout(() => {
                    message.remove();
                }, 4000);
            }, i * 200);
        }
    }, 500);
    
    // Store interval so it can be cleared if needed
    window.killMessageInterval = interval;
}

// Create floating hearts animation
function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💞', '💟', '❣️'];
    const wrapper = document.querySelector('.wrapper');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            wrapper.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}