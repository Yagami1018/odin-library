const library = [];
function Book(author, title, pages, isRead) {
    const id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages || 0;
    this.isRead = isRead;
}

function addBookToLibrary(Book) {
    library.push(Book);
}

const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const reading = document.getElementById('reading');
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    const newBook = new Book(author.value, title.value, pages.value, reading.checked);
    console.log(newBook);
});
