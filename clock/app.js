// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

// Update clock
function updateClock() {
    const now = new Date();
    
    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Format time in 24-hour format with leading zeros
    const formattedTime = 
        hours.toString().padStart(2, '0') + ':' + 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    
    document.getElementById('time').textContent = formattedTime;
    
    // Subtle background animation based on seconds
    const hue = (seconds / 60) * 30;
    document.body.style.background = `linear-gradient(135deg, hsl(240, ${20 + seconds}%, 15%) 0%, hsl(220, ${30 + seconds/2}%, 17%) 100%)`;
}

// Initial update and set interval
updateClock();
setInterval(updateClock, 1000);