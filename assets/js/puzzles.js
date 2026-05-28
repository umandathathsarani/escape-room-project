const clueBook = document.getElementById('clue-book');
const clueDisplay = document.getElementById('clue-display');
const normalBooks = document.querySelectorAll('.book-hotspot:not(#clue-book)');
const messageBox = document.getElementById('message-box');

if (clueBook && clueDisplay) {
    clueBook.addEventListener('click', () => {
        clueDisplay.classList.remove('hidden');
    });

    normalBooks.forEach(book => {
        book.addEventListener('click', () => {
            if (messageBox) {
                messageBox.innerText = "Just a boring old book. Nothing useful here.";
                messageBox.classList.remove('hidden');
                
                setTimeout(() => {
                    messageBox.classList.add('hidden');
                }, 3000);
            }
        });
    });
}

const safeInput = document.getElementById('safe-input');
const unlockBtn = document.getElementById('unlock-safe-btn');
const safeReward = document.getElementById('safe-reward');
const takeFlashlightBtn = document.getElementById('take-flashlight-btn');

if (unlockBtn) {
    unlockBtn.addEventListener('click', () => {
        if (safeInput.value === '4279') {
            safeReward.classList.remove('hidden');
            unlockBtn.disabled = true;
            safeInput.disabled = true;
            if (messageBox) {
                messageBox.innerText = "Safe Unlocked!";
                messageBox.classList.remove('hidden');
                setTimeout(() => messageBox.classList.add('hidden'), 3000);
            }
        } else {
            safeInput.value = '';
            if (messageBox) {
                messageBox.innerText = "Incorrect Code.";
                messageBox.classList.remove('hidden');
                setTimeout(() => messageBox.classList.add('hidden'), 3000);
            }
        }
    });
}

if (takeFlashlightBtn) {
    takeFlashlightBtn.addEventListener('click', () => {
        let inventory = JSON.parse(localStorage.getItem('escapeInventory')) || [];
        
        if (!inventory.includes('flashlight')) {
            inventory.push('flashlight');
            localStorage.setItem('escapeInventory', JSON.stringify(inventory));
            updateInventoryUI();
        }
        
        takeFlashlightBtn.disabled = true;
        takeFlashlightBtn.innerText = 'Collected';
    });
}