// Data structures
const library = [];

function Book(author, title, pages, isRead) {
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = Number.parseInt(pages) || 0;
    this.isRead = isRead;
}

// Utility functions
const deleteBookFromLibrary = (book, card) => {
    card.remove();
    const index = library.indexOf(book);
    library.splice(index, 1);
};

const createBookCard = book => {
    const card = document.createElement('div');
    const fields = document.createElement('div');
    const buttons = document.createElement('div');
    const authorDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readingDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    fields.classList.add('fields');
    buttons.classList.add('buttons');
    authorDiv.classList.add('book-author');
    titleDiv.classList.add('book-title');
    pagesDiv.classList.add('book-pages');
    readingDiv.classList.add('book-reading');
    deleteBtn.classList.add('delete');
    readBtn.classList.add('read');
    card.classList.add('card');

    readBtn.textContent = 'Read';
    deleteBtn.textContent = 'Delete';
    authorDiv.textContent = `Author: ${book.author}`;
    titleDiv.textContent = `Title: ${book.title}`;
    pagesDiv.textContent = `Pages: ${book.pages}`;
    readingDiv.textContent = `Reading: ${book.isRead ? 'Yes' : 'No'}`;

    deleteBtn.addEventListener('click', () => deleteBookFromLibrary(book, card));
    readBtn.addEventListener('click', () => {
        book.isRead = !book.isRead;
        readingDiv.textContent = `Reading: ${book.isRead ? 'Yes' : 'No'}`;
    });

    fields.appendChild(authorDiv);
    fields.appendChild(titleDiv);
    fields.appendChild(pagesDiv);
    fields.appendChild(readingDiv);
    card.appendChild(fields);
    buttons.appendChild(deleteBtn);
    buttons.appendChild(readBtn);
    card.appendChild(buttons);

    return card;
};

const addBookToLibrary = book => {
    library.push(book);
    const container = document.querySelector('.card-container');
    const card = createBookCard(book);
    container.appendChild(card);
};

// DOM element references
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const readingInput = document.getElementById('reading');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const sidebar = document.querySelector('.sidebar');
const newBookBtn = document.querySelector('.new-book');

// Event listeners
addBtn.addEventListener('click', e => {
    e.preventDefault();
    const author = authorInput.value.trim();
    const title = titleInput.value.trim();
    const pages = pagesInput.value.trim();

    if (!author || !title) {
        alert('Please enter both author and title.');
        return;
    }

    const newBook = new Book(author, title, pages, readingInput.checked);
    addBookToLibrary(newBook);

    // Clear form after adding
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    readingInput.checked = false;
});

resetBtn.addEventListener('click', e => {
    e.preventDefault();
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    readingInput.checked = false;
});

newBookBtn.addEventListener('click', e => {
    sidebar.style.display = 'flex';
});
