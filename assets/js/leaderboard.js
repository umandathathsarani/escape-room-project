const leaderboardBody = document.getElementById('leaderboard-body');
const clearBtn = document.getElementById('clear-records-btn');

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

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if(confirm("Are you sure you want to permanently delete all player records?")) {
            localStorage.removeItem('escapeLeaderboard');
            renderLeaderboard();
        }
    });
}

renderLeaderboard();