const clueBook = document.getElementById('clue-book');
const clueDisplay = document.getElementById('clue-display');
const normalBooks = document.querySelectorAll('.book-hotspot:not(#clue-book)');

if (clueBook && clueDisplay) {
    clueBook.addEventListener('click', () => {
        clueDisplay.classList.remove('hidden');
    });

    normalBooks.forEach(book => {
        book.addEventListener('click', () => {
            alert("Just a boring old book. Nothing useful here.");
        });
    });
}