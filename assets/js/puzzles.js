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
            if (typeof updateInventoryUI === 'function') {
                updateInventoryUI();
            }
        }
        
        takeFlashlightBtn.disabled = true;
        takeFlashlightBtn.innerText = 'Collected';
    });
}

const plants = document.querySelectorAll('.plant-dropzone');
const keyReward = document.getElementById('key-reward');
const takeKeyBtn = document.getElementById('take-key-btn');

if (plants.length > 0) {
    plants.forEach(plant => {
        plant.addEventListener('dragover', (e) => {
            e.preventDefault();
            plant.classList.add('drag-over');
        });

        plant.addEventListener('dragleave', () => {
            plant.classList.remove('drag-over');
        });

        plant.addEventListener('drop', (e) => {
            e.preventDefault();
            plant.classList.remove('drag-over');
            
            const draggedItem = e.dataTransfer.getData('text/plain');

            if (draggedItem === 'flashlight') {
                if (plant.id === 'special-plant') {
                    keyReward.classList.remove('hidden');
                    if (messageBox) {
                        messageBox.innerText = "You found something!";
                        messageBox.classList.remove('hidden');
                        setTimeout(() => messageBox.classList.add('hidden'), 3000);
                    }
                } else {
                    if (messageBox) {
                        messageBox.innerText = "Just ordinary dirt here.";
                        messageBox.classList.remove('hidden');
                        setTimeout(() => messageBox.classList.add('hidden'), 3000);
                    }
                }
            }
        });
    });
}

if (takeKeyBtn) {
    takeKeyBtn.addEventListener('click', () => {
        let inventory = JSON.parse(localStorage.getItem('escapeInventory')) || [];
        
        if (!inventory.includes('key')) {
            inventory.push('key');
            localStorage.setItem('escapeInventory', JSON.stringify(inventory));
            if (typeof updateInventoryUI === 'function') {
                updateInventoryUI();
            }
        }
        
        takeKeyBtn.disabled = true;
        takeKeyBtn.innerText = 'Collected';
    });
}

const paperPieces = document.querySelectorAll('.paper-piece');
const studyReward = document.getElementById('study-reward');
const vaultLink = document.getElementById('vault-link');

if (paperPieces.length > 0) {
    paperPieces.forEach(piece => {
        piece.addEventListener('click', () => {
            let currentRotation = parseInt(piece.getAttribute('data-rotation'));
            currentRotation += 90;
            piece.setAttribute('data-rotation', currentRotation);
            piece.style.transform = `rotate(${currentRotation}deg)`;

            checkPaperPuzzle();
        });
    });
}

function checkPaperPuzzle() {
    let solved = true;
    
    paperPieces.forEach(piece => {
        const rotation = parseInt(piece.getAttribute('data-rotation'));
        if (rotation % 360 !== 0) {
            solved = false;
        }
    });

    if (solved && studyReward) {
        studyReward.classList.remove('hidden');
        if (vaultLink) {
            vaultLink.classList.remove('hidden');
        }
        if (messageBox) {
            messageBox.innerText = "Password revealed! The Vault is unlocked.";
            messageBox.classList.remove('hidden');
            setTimeout(() => messageBox.classList.add('hidden'), 3000);
        }
    }
}

const vaultKeyhole = document.getElementById('vault-keyhole');
const vaultPassword = document.getElementById('vault-password');
const unlockVaultBtn = document.getElementById('unlock-vault-btn');

if (vaultKeyhole) {
    vaultKeyhole.addEventListener('dragover', (e) => {
        e.preventDefault();
        vaultKeyhole.classList.add('drag-over');
    });

    vaultKeyhole.addEventListener('dragleave', () => {
        vaultKeyhole.classList.remove('drag-over');
    });

    vaultKeyhole.addEventListener('drop', (e) => {
        e.preventDefault();
        vaultKeyhole.classList.remove('drag-over');
        
        const draggedItem = e.dataTransfer.getData('text/plain');

        if (draggedItem === 'key') {
            vaultKeyhole.classList.add('inserted');
            vaultKeyhole.innerText = "Key Inserted";
            vaultPassword.disabled = false;
            unlockVaultBtn.disabled = false;
            
            if (messageBox) {
                messageBox.innerText = "Key accepted. Enter passcode.";
                messageBox.classList.remove('hidden');
                setTimeout(() => messageBox.classList.add('hidden'), 3000);
            }
        }
    });
}

if (unlockVaultBtn) {
    unlockVaultBtn.addEventListener('click', () => {
        const pass = vaultPassword.value.trim().toUpperCase();
        
        if (pass === 'NOVA') {
            window.location.href = 'success.html';
        } else {
            vaultPassword.value = '';
            if (messageBox) {
                messageBox.innerText = "Access Denied.";
                messageBox.classList.remove('hidden');
                setTimeout(() => messageBox.classList.add('hidden'), 3000);
            }
        }
    });
}