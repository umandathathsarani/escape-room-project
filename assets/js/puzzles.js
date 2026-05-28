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