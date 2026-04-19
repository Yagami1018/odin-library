const library = [];
function Book(author, title, pages, isRead) {
    const id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(Book){
    library.push(Book);
}