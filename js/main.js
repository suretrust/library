let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    reset();
    display();
}

function reset() {
    let tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
}


function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        let body = `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>
                        <td class="btn btn-md"><button>${myLibrary[i].read}</button></td>
                        <button id="remove" data-index-number="${i}">Remove</button>
                    </tr>`;
        let tbody = document.getElementById('table-body');
        tbody.innerHTML += body;
    }
}

document.getElementById('add').addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
});


let remove = document.getElementById("remove");
let dataset = remove.dataset.indexNumber;
console.log("dataset");
document.getElementById("remove").addEventListener("click", function() {
    let index = parseInt(remove.dataset.indexNumber);
    myLibrary.splice(index, 1);
    reset();
    display();
});

// addBookToLibrary("First title", "First author", 23, true);
// addBookToLibrary("First title", "First author", 23, true);
// addBookToLibrary("First title", "First author", 23, true);