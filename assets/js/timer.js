const startBtn = document.getElementById('startGameBtn');
const nameInput = document.getElementById('playerName');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        const playerName = nameInput.value.trim() || "Anonymous Detective";
        const timeLimitMS = 15 * 60 * 1000; 
        const endTime = Date.now() + timeLimitMS;
        
        localStorage.setItem('escapePlayerName', playerName);
        localStorage.setItem('escapeEndTime', endTime);
        localStorage.setItem('escapeInventory', JSON.stringify([]));

        window.location.href = 'library.html';
    });
}

const timeDisplay = document.getElementById('time-left');

if (timeDisplay) {
    setInterval(() => {
        const endTime = localStorage.getItem('escapeEndTime');
        
        if (endTime) {
            const timeLeftMS = endTime - Date.now();

            if (timeLeftMS <= 0) {
                window.location.href = 'game-over.html';
            } else {
                const minutes = Math.floor(timeLeftMS / (1000 * 60));
                const seconds = Math.floor((timeLeftMS % (1000 * 60)) / 1000);

                const formattedMins = minutes.toString().padStart(2, '0');
                const formattedSecs = seconds.toString().padStart(2, '0');
                
                timeDisplay.innerText = `${formattedMins}:${formattedSecs}`;
            }
        }
    }, 1000);
}

window.applyTimePenalty = function(minutes) {
    let endTime = localStorage.getItem('escapeEndTime');
    if (endTime) {
        endTime = parseInt(endTime) - (minutes * 60 * 1000);
        localStorage.setItem('escapeEndTime', endTime);
   
        const timerDisplay = document.getElementById('time-left');
        if (timerDisplay) {
            timerDisplay.style.color = '#ff4444';
            setTimeout(() => timerDisplay.style.color = '', 1000);
        }
    }
};