let myLibrary = [];

function Book(title, author) {
    this.title = title
    this.author = author
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(){
    let libraryGrid=document.querySelector("#book-grid");
    
    myLibrary.forEach( book =>{
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<div class = "title">${book.title}</div>
                                <div class = "book-info">${book.author}</div>`;
        libraryGrid.appendChild(bookCard);
    });
}

livro1 = new Book("livro1", "filipa");
livro2 = new Book("Livro 2", "Julianna");

addBookToLibrary(livro1);
addBookToLibrary(livro2);

displayLibrary();