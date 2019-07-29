let myLibrary = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function createBook(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    return newBook;
}

function addBookToLibrary(createBook(title, author, pages, read)) {
  // add book to library array
  myLibrary.push(newBook);
  render()
}

