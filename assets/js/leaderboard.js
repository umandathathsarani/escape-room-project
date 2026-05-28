const leaderboardBody = document.getElementById('leaderboard-body');
const clearBtn = document.getElementById('clear-records-btn');
const confirmModal = document.getElementById('custom-confirm-modal');
const confirmBtn = document.getElementById('modal-confirm-btn');
const cancelBtn = document.getElementById('modal-cancel-btn');

function renderLeaderboard() {
    if (!leaderboardBody) return;

    const leaderboard = JSON.parse(localStorage.getItem('escapeLeaderboard')) || [];
    leaderboardBody.innerHTML = '';

    if (leaderboard.length === 0) {
        leaderboardBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">No archives found.</td></tr>';
        return;
    }

    leaderboard.forEach(run => {
        const row = document.createElement('tr');
        
        const outcomeClass = run.outcome === 'Escaped' ? 'outcome-escaped' : 'outcome-failed';

        row.innerHTML = `
            <td>${run.name}</td>
            <td class="${outcomeClass}">${run.outcome}</td>
            <td>${run.time}</td>
            <td>${run.date}</td>
        `;
        
        leaderboardBody.appendChild(row);
    });
}

if (clearBtn && confirmModal && confirmBtn && cancelBtn) {
    clearBtn.addEventListener('click', () => {
        confirmModal.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        confirmModal.classList.add('hidden');
    });

    confirmBtn.addEventListener('click', () => {
        localStorage.removeItem('escapeLeaderboard');
        renderLeaderboard();
        confirmModal.classList.add('hidden');
    });
}

renderLeaderboard();