document.addEventListener("DOMContentLoaded", function() {
    // Fireworks container
    const fireworksContainer = document.getElementById('fireworks');

    // Function to create fireworks
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        // Set random position
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        
        // Assign a random color class
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        firework.classList.add(randomColor);

        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove(); // Remove the firework after the animation
        }, 1000);
    }

    // Generate fireworks every 500ms
    setInterval(createFirework, 500);

    // Hearts animation
    const heartsContainer = document.getElementById('hearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove the heart after it floats
        }, 4000); // Remove after animation
    }, 1000);

    // Create flying "Love You" text
    function createLoveText() {
        const loveText = document.createElement('div');
        loveText.classList.add('love-text-item');
        loveText.innerHTML = 'Love You 🌸'; // Text with flower emoji
        loveText.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        loveText.style.fontSize = '2.5rem';
        
        document.getElementById('love-text').appendChild(loveText);

        // Remove the text after animation
        setTimeout(() => {
            loveText.remove();
        }, 4000); // Remove after the animation duration
    }

    // Generate flying "Love You" text every 5 seconds
    setInterval(createLoveText, 5000);
});
