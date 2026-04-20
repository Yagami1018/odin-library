const library = [];
function Book(author, title, pages, isRead) {
    const id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages || 0;
    this.isRead = isRead;
}

const addBookToLibrary = book => {
    library.push(book);
    let card = document.createElement('div');
    let fields = document.createElement('div');
    fields.classList.add('fields');
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    let autor = document.createElement('div');
    autor.classList.add('book-author');
    let titulo = document.createElement('div');
    titulo.classList.add('book-title');
    let paginas = document.createElement('div');
    paginas.classList.add('book-pages');
    let reading = document.createElement('div');
    reading.classList.add('book-reading');
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        card.remove();
        console.log(library);
        let index = library.indexOf(book);
        library.splice(index, 1);
    });

    let readBtn = document.createElement('button');
    readBtn.classList.add('read');
    readBtn.textContent = 'Read';
    readBtn.addEventListener('click', () => {
        book.isRead = !book.isRead;
        reading.textContent = `Reading: ${book.isRead ? 'Yes' : 'No'}`;
    });

    buttons.classList.add('buttons');
    let container = document.querySelector('.card-container');
    autor.textContent = `Author: ${book.author}`;
    titulo.textContent = `Title: ${book.title}`;
    paginas.textContent = `Pages: ${book.pages}`;
    reading.textContent = `Reading: ${book.isRead ? 'Yes' : 'No'}`;
    fields.appendChild(autor);
    fields.appendChild(titulo);
    fields.appendChild(paginas);
    fields.appendChild(reading);
    card.classList.add('card');
    card.appendChild(fields);
    buttons.appendChild(deleteBtn);
    buttons.appendChild(readBtn);
    card.appendChild(buttons);
    container.appendChild(card);
};

const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const reading = document.getElementById('reading');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const sidebar = document.querySelector('.sidebar');
const newBook = document.querySelector('.new-book');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    const newBook = new Book(author.value, title.value, pages.value, reading.checked);
    addBookToLibrary(newBook);
    console.log(library);
});
resetBtn.addEventListener('click', e => {
    e.preventDefault();
    author.value = '';
    title.value = '';
    pages.value = 0;
    reading.checked = false;
});
newBook.addEventListener('click', e => {
    sidebar.style.display = 'flex';
});
