const timeTakenDisplay = document.getElementById('time-taken');
const restartBtns = document.querySelectorAll('.restart-btn');

function recordPlayerRun(outcome, finalTimeStr) {
    const playerName = localStorage.getItem('escapePlayerName') || "Unknown";
    const date = new Date().toLocaleDateString();
    
    const runData = {
        name: playerName,
        outcome: outcome,
        time: finalTimeStr,
        date: date
    };

    let leaderboard = JSON.parse(localStorage.getItem('escapeLeaderboard')) || [];
    leaderboard.push(runData);
    localStorage.setItem('escapeLeaderboard', JSON.stringify(leaderboard));
}

if (window.location.pathname.includes('success.html')) {
    const endTime = localStorage.getItem('escapeEndTime');
    let displayTime = "--:--";

    if (endTime) {
        const timeLeftMS = endTime - Date.now();
        const timeLimitMS = 15 * 60 * 1000; 
        const timeTakenMS = timeLimitMS - timeLeftMS;
        
        if (timeTakenMS > 0 && timeTakenMS < timeLimitMS) {
            const minutes = Math.floor(timeTakenMS / (1000 * 60));
            const seconds = Math.floor((timeTakenMS % (1000 * 60)) / 1000);
            displayTime = `${minutes}m ${seconds}s`;
            if (timeTakenDisplay) {
                timeTakenDisplay.innerText = displayTime;
            }
        }
    }
    
    if (!sessionStorage.getItem('runRecorded')) {
        recordPlayerRun('Escaped', displayTime);
        sessionStorage.setItem('runRecorded', 'true');
    }
}

if (window.location.pathname.includes('game-over.html')) {
    if (!sessionStorage.getItem('runRecorded')) {
        recordPlayerRun('Failed', 'Ran out of time');
        sessionStorage.setItem('runRecorded', 'true');
    }
}

if (restartBtns.length > 0) {
    restartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sessionStorage.removeItem('runRecorded');
            localStorage.removeItem('escapeEndTime');
            localStorage.removeItem('escapeInventory');
            localStorage.removeItem('escapePlayerName');
            window.location.href = 'index.html';
        });
    });
}