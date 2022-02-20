getTopics = () => {
    let topics = document.querySelectorAll('.topics p');

    for (let topic of topics) {
        topic.onclick = () => {
            for (let topic of topics) {
                topic.classList.remove('genre-selected');
            }            
            topic.classList.add('genre-selected');

            let books = document.querySelectorAll('.book');

            for (let book of books) {
                if ((book.getAttribute('data-topic') == topic.getAttribute('data-topic'))) {
                    document.querySelector('.library .container').style.justifyContent = "center";
                    book.style.width = "260px";
                    book.style.height = "360px";
                }

                if (!(book.getAttribute('data-topic') == topic.getAttribute('data-topic'))) {
                    book.style.display = "none";    
    
                    if (topic.getAttribute('data-topic') == "All") {
                        for (let book of books) {
                            book.style.width = "220px";
                            book.style.height = "320px";
                            document.querySelector('.library .container').style.justifyContent = "start";
                            if (book.getAttribute('data-type') == topic.getAttribute('data-type')) {
                                book.style.display = "block";
                            }
                        }
                    }   
                } 
                else {
                    book.style.display = "block";
                }
    
            }
        }
    }
}

switchTypes = () => {
    let types = document.querySelectorAll('.library .switcher p');
    let books = document.querySelectorAll('.book');
    let topics = document.querySelectorAll('.topics p');

    for (let type of types) {
        type.onclick = () => {
            for (let type of types) {
                for (let topic of topics) {
                    topic.classList.remove('genre-selected')
                    
                    if (topic.getAttribute('data-topic') == "All") {
                        topic.classList.add('genre-selected')
                    }
                }
                type.classList.remove('genre-selected');
            }            
            type.classList.add('genre-selected');

            for (let topic of topics) {
                if (!(topic.getAttribute('data-type') == type.getAttribute('data-type'))) {
                    topic.style.display = "none";    
     
                } 
                else {
                    topic.style.display = "block";
                }
            }  
    
            for (let book of books) {
                if (!(book.getAttribute('data-type') == type.getAttribute('data-type'))) {
                    book.style.display = "none";    
                } 
                else {
                    document.querySelector('.library .container').style.justifyContent = "start";
                    book.style.display = "block";
                    book.style.width = "220px";
                    book.style.height = "320px";
                }
            }
        }
    }

    originalSettings = () => {    
        for (let topic of topics) {        
            if (topic.getAttribute('data-type') == "Professional") {
                topic.style.display = "block";
            }
            else {
                topic.style.display = "none";
            }
        }

        for (let book of books) {        
            if (book.getAttribute('data-type') == "Professional") {
                book.style.display = "block";
            }
            else {
                book.style.display = "none";
            }
        }
    }
    originalSettings()
}


getTopics()
switchTypes()