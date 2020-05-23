const addBookModal = document.getElementById('add-modal');
const btnAddBooks = document.querySelector('.btn-full');


const backdrop = document.getElementById('backdrop');
const cancelBtnModal = addBookModal.querySelector('.btn-passive');
const searchBtnModal = addBookModal.querySelector('.btn-success');

    
const toggleBackdropHandler = () => {
    backdrop.classList.toggle('visible');
}
      
//Arrow function to open add book modal
const showBookModal = () => {
    addBookModal.classList.toggle('visible');
    toggleBackdropHandler();
};
 
const backdropClickHandler = () => {
    showBookModal();
};
    
const cancelBtnHandler = () => {
    showBookModal();
};

function onclickSearch  () { 
    showBookModal();
}

btnAddBooks.addEventListener('click', showBookModal);

//bookIcon.addEventListener('click', showBookModal, false);  

backdrop.addEventListener('click', backdropClickHandler);
cancelBtnModal.addEventListener('click', cancelBtnHandler);
searchBtnModal.addEventListener('click', onclickSearch);

//******SEND XMLHTTPREQUEST*******/
const btnRechercher = document.getElementById('btn-rechercher');

//let bookSearch = document.querySelector('.modal-content').value; //<!-- userInput-->
const listElement = document.querySelector('.list-books'); //<!--results-->
const template = document.getElementById('book-template');

function searchBookHandler () {
    
    let title = document.getElementById('titre-livre').value;
    let author = document.getElementById('auteur').value;
    let search = [title, author].join(' ');  // or let search =`${title} + ${author}`;
    
    console.log(search);
    
    //Promisifying HttpRequest with XMLHttpRequest
    function sendHttpRequest(method, url, data) {
        const promise = new Promise((resolve, reject) => { 
            const xhr = new XMLHttpRequest();
        
            //First step toward configuring the request using GET request as we want to get the request
            xhr.open(method, url);

            //parse JSON format response to output it in the UI; parse convert JSON data to js
            xhr.responseType = 'json';

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(new Error('Something went wrong!'));
                }

        };
            
        xhr.onerror = function() {
            reject(new Error('Failed to send request!'));
            //console.log(xhr.response);
            //console.log(xhr.status);    
        }

        xhr.send(JSON.stringify(data));
            
        });      
       return promise; 
//         return fetch(url).then(response => { //fetch() API is a promise so no need to return promise
//            return response.json();
//        });
  }
    
    async function fetchBooks() {
//        try {
          const responseData = await sendHttpRequest(
            'GET', 
            "https://www.googleapis.com/books/v1/volumes?q=" + search );
        
        const listOfBooks = responseData; 
            console.log(listOfBooks);

            for (i=0; i < listOfBooks.items.length; i++) {
             console.log(listOfBooks.items[i]);
                
            const postEl = document.importNode(template.content, true);
            postEl.querySelector('.id').templateid = listOfBooks.items[i].id;
            postEl.querySelector('.titre').textContent = listOfBooks.items[i].volumeInfo.title;
            postEl.querySelector('.author').textContent = listOfBooks.items[i].volumeInfo.authors;
            postEl.querySelector('.desc').textContent = listOfBooks.items[i].volumeInfo.description;
            postEl.querySelector('.infoLinks').textContent = listOfBooks.items[i].volumeInfo.infoLink;
            postEl.querySelector('img').src = listOfBooks.items[i].volumeInfo.imageLinks.thumbnail;
               
                
            
                if (postEl.querySelector('.desc').textContent.length > 200) {
                    postEl.querySelector('.desc').textContent = postEl.querySelector('.desc').textContent.substring(0,200);
                    }
            
            listElement.append(postEl);
            
            
            }  
//        } catch (error) {
//          alert(error.message);
//        }
        
    }  
   fetchBooks(); 
}

btnRechercher.addEventListener('click', searchBookHandler, false);



 






//btnRechercher.addEventListener('click', searchBookHandler => {
//        searchBookHandler.preventDefault();
//        const enteredTitle = searchBookHandler.currentTarget.querySelector('#titre-livre').value;
//        const enteredAuthor = searchBookHandler.currentTarget.querySelector('#auteur').value;
//    });



//postEl.querySelector('img').textContent = listOfBooks.items[i].volumeInfo.imageLinks.thumbnail;
    
//fetchPosts();

//btnRechercher.addEventListener('click', searchBookHandler, false);
    
//btnRechercher.addEventListener('click', fetchPosts);  
    
//btnRechercher.addEventListener('click', fetchPosts);
//    bookSearch.addEventListener('submit', event => {
//        event.preventDefault();
//        const enteredTitle = event.currentTarget.querySelector('#titre-livre').value;
//        const enteredAuthor = event.currentTarget.querySelector('#auteur').value;
//        
//        createPost(enteredTitle, enteredAuthor);
//    }); 
    
    

