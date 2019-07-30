/* eslint-disable */
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

function removeBook(index) {
    myLibrary.splice(index, 1);
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
                        <th scope="row">${i + 1}</th>
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>
                        <td><button onclick="read(${i})" class="btn btn-md btn-secondary">${myLibrary[i].read}</button></td>
                        <td><button class="btn btn-md btn-danger" onclick="removeBook(${i})" id="remove">Remove</button></td>
                    </tr>`;

        let tbody = document.getElementById('table-body');
        tbody.innerHTML += body;
    }
}

document.getElementById("add").style.display = "none";

document.getElementById('add').addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);
});


function formDisplay(elem) {
    if (elem == 1)
        document.getElementById("add").style.display = "none";
    else
        document.getElementById("add").style.display = "block";
}

function read(index) {
    if (myLibrary[index].read == true) {
        myLibrary[index].read = false;
    } else {
        myLibrary[index].read = true;
    }
    reset();
    display();
}