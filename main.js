let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(){
    myLibrary.forEach((book) => displayBook(book));
}

function openForm(){
    let bookForm= document.querySelector(".form-container");
    bookForm.style.display= "block";
}

function closeForm(){
    let bookForm= document.querySelector(".form-container");
    bookForm.style.display= "none";
    console.log(document.forms);
}

function createBook(){
    form= document.querySelector(".form-container");
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let totalPages = document.querySelector("#total-pages").value;
    let livro = new Book(title, author, totalPages);
    addBookToLibrary(livro);
    displayBook(livro);
}

function displayBook(book){
    let libraryGrid=document.querySelector("#book-grid");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<div class = "title">${book.title}</div>
                            <div class = "book-info">${book.author}</div>`;
    libraryGrid.appendChild(bookCard);

}

livro1 = new Book("livro1", "filipa",22);
livro2 = new Book("Livro 2", "Julianna",22);
livro3 = new Book("livro12", "filipa",33);
livro4 = new Book("livro11", "filipa",333);
livro5 = new Book("livro30", "filipa",44);


addBookToLibrary(livro1);
addBookToLibrary(livro2);
addBookToLibrary(livro3);
addBookToLibrary(livro4);
addBookToLibrary(livro5);


displayLibrary();



let formButton = document.querySelector("#add-book");
let insideFormButton = document.querySelectorAll(".form-button");
let submit = document.querySelector("#submit-button");
formButton.addEventListener("click", openForm);
submit.addEventListener("click", createBook);

insideFormButton.forEach(btn  =>{
    btn.addEventListener("click", closeForm);
});
