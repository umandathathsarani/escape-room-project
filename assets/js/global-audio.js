document.querySelectorAll('button, .nav-button').forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.disabled) return;
        
        const audio = new Audio('assets/audio/click.mp3');
        audio.play().catch(() => {});

        if (element.tagName === 'A' && element.classList.contains('nav-button')) {
            e.preventDefault();
            const targetUrl = element.href;
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 200); 
        }
    });
});