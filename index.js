
function fetchBooks() {
    fetch(" http://localhost:3000/books")

        .then(response => response.json())

        .then(data => {
            const books = data
            console.log(books)
            showBooks(books)

        })
}

function showBooks(books) {
    books.forEach(book => {
        const bookImage = document.createElement('img')
        const bookTitle = document.createElement('h3')
        const book_content = document.createElement('div')
        book_content.className = "book_content"
        book_content.addEventListener('click', showAdditionalDetails)
        const icon = document.createElement('i')
        icon.className = "fas fa-heart icon";
        icon.setAttribute("aria-hidden","true")

        bookImage.src = book.img_url
        bookTitle.textContent = book.title

        const book_cardsDiv = document.querySelector('.book_cards')
        const imageDiv = document.createElement('div')
        imageDiv.id = "image"
        const titleDiv = document.createElement('div')
        titleDiv.id = "title"
        const likerDiv = document.createElement('div')
        likerDiv.id = "liker"

        imageDiv.appendChild(bookImage)
        titleDiv.appendChild(bookTitle)
        likerDiv.appendChild(icon)




        book_content.appendChild(imageDiv)
        book_content.appendChild(titleDiv)
        book_content.appendChild(likerDiv);

        book_cardsDiv.appendChild(book_content)
    })

}

function showAdditionalDetails(event){
    window.alert("A card has been clicked")
}



fetchBooks()




// create showBooks (books){

// }
// create nodes dynamically(bookstitle)
// Add an eventListener('click', displayBooksDeails(books)) on our books card element
// On clicking the books Card element call  the callBack function
// Assign values to nodes
// Append nodes to body

// Create displayBooksDeails(books){

// }