getAuthors = () => {
    let authors = document.querySelectorAll('.topics p');

    for (let author of authors) {
        author.onclick = () => {
            for (let author of authors) {
                author.classList.remove('genre-selected');
            }            
            author.classList.add('genre-selected');

            let books = document.querySelectorAll('.book');

            for (let book of books) {
                book.style.width = "260px";
                book.style.height = "360px";

                if (!(book.getAttribute('data-topic') == author.getAttribute('data-topic'))) {
                    book.style.display = "none";    
    
                    if (author.getAttribute('data-topic') == "All") {
                        book.style.display = "block";
                        book.style.width = "180px";
                        book.style.height = "240px";
                    }   
                } 
                else {
                    book.style.display = "block";
                }
    
            }
        }
    }
}

getAuthors()