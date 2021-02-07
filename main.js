let myLibrary = [];

function Book(title, author, pages, status=true) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.readPagesToggle= function(){
    this.status= !this.status
    //console.log(checkstatus);
}

function addBookToLibrary(book){
    myLibrary.push(book);
    displayBook(book);
}

function displayLibrary(){
    myLibrary.forEach((book) => displayBook(book));
    events();
}

function resetLibrary(){
    let container= document.querySelector("#library-container");
    let libraryGrid = document.querySelector("#book-grid");
    libraryGrid.remove();
    let newLibraryGrid = document.createElement("div");
    newLibraryGrid.id="book-grid";

    container.appendChild(newLibraryGrid);
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
    let title = document.querySelector("#title-form").value;
    let author = document.querySelector("#author-form").value;
    let totalPages = document.querySelector("#total-pages").value;
    let livro = new Book(title, author, totalPages);
    addBookToLibrary(livro);
    resetLibrary();
    displayLibrary();
}

function displayBook(book){
    let libraryGrid=document.querySelector("#book-grid");
    index=myLibrary.indexOf(book);

    //make bookCard element
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    //remove-button
    let divHeader= document.createElement("div");
    divHeader.classList.add("book-header");
    let removeButton=document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.setAttribute("data-index", `${index}`);
    removeButton.textContent="X";
    divHeader.appendChild(removeButton);
    bookCard.appendChild(divHeader);

    //bookCard Title
    let divTitle= document.createElement("div");
    divTitle.classList.add("book-title");
    let hTitle = document.createElement("h2");
    hTitle.textContent=`${book.title}`;
    divTitle.appendChild(hTitle);
    bookCard.appendChild(divTitle);

    //other info
    let divInfo= document.createElement("div");
    divInfo.classList.add("book-info");
        //author
    let pAuthor = document.createElement("p");
    pAuthor.id = "author";
    pAuthor.textContent=`by ${book.author}`;
    divInfo.appendChild(pAuthor);
        //n of pages
    let pPages = document.createElement("p")
    pPages.id="pages";
    pPages.textContent=`Nº of Pages: ${book.pages}`
    divInfo.appendChild(pPages);

    bookCard.appendChild(divInfo);

    // read status
    let divReadStatus= document.createElement("div");
    divReadStatus.classList.add("read-status-container");
    let readStatusButton= document.createElement("button");
    let readStatusLabel= document.createElement("label");
    readStatusButton.id="read-status";
    readStatusButton.setAttribute("data-index", `${index}`);
    if (book.status == true){
        readStatusLabel.textContent="Book finished!";
        readStatusButton.textContent="Not Read?";
    }
    else{
        readStatusLabel.textContent="Still Reading...";
        readStatusButton.textContent="Completed?";
        bookCard.setAttribute("class", "not-read-card");
    }
    divReadStatus.appendChild(readStatusLabel);
    divReadStatus.appendChild(readStatusButton);
    bookCard.appendChild(divReadStatus);

    libraryGrid.appendChild(bookCard);
   // book.readPagesToggle();
}

function removeCard(btnRemove){ 
    index=btnRemove.getAttribute("data-index"); 
    myLibrary.splice(index,1);
    update();
}

function update(){
    resetLibrary();
    displayLibrary();
}

livro2 = new Book("Livro Exemplo", "Julianna", 22);
addBookToLibrary(livro2);

function events(){
    // form buttons events
    let formButton = document.querySelector("#add-book");
    let insideFormButton = document.querySelectorAll(".form-button");
    let submit = document.querySelector("#submit-button");

    formButton.addEventListener("click", openForm);
    submit.addEventListener("click", createBook);

    insideFormButton.forEach(btn  =>{
        btn.addEventListener("click", closeForm);
    });

    // book remove button
    let remove = document.getElementsByClassName("remove");
    for (let i=0; i<remove.length; i++){
        remove[i].addEventListener("click", function(){
            removeCard(remove[i]);
        })
    }

    //book read status button
    let readStatus= document.querySelectorAll("#read-status");
    readStatus.forEach(btn => {
        btn.addEventListener("click", function(){
            console.log(myLibrary[btn.getAttribute("data-index")].readPagesToggle());
            console.log(myLibrary[btn.getAttribute("data-index")].status);
            update();
        });
    });
}

events();