const timeTakenDisplay = document.getElementById('time-taken');
const restartBtns = document.querySelectorAll('.restart-btn');

if (timeTakenDisplay) {
    const endTime = localStorage.getItem('escapeEndTime');
    if (endTime) {
        const timeLeftMS = endTime - Date.now();
        const timeLimitMS = 15 * 60 * 1000; 
        const timeTakenMS = timeLimitMS - timeLeftMS;
        
        if (timeTakenMS > 0 && timeTakenMS < timeLimitMS) {
            const minutes = Math.floor(timeTakenMS / (1000 * 60));
            const seconds = Math.floor((timeTakenMS % (1000 * 60)) / 1000);
            timeTakenDisplay.innerText = `${minutes}m ${seconds}s`;
        }
    }
}

if (restartBtns.length > 0) {
    restartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'index.html';
        });
    });
}