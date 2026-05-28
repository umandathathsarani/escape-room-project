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