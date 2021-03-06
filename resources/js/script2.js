const myBooks = document.getElementById('myBooks');

const backdrop = document.createElement('div');
backdrop.id = "backdrop";
myBooks.after(backdrop);

const btnAddBooks = document.createElement('button');
btnAddBooks.classList = "btn btn-full";
btnAddBooks.textContent = "Ajouter un livre";
myBooks.appendChild(btnAddBooks);

//****MODAL CONTENT****/
const addBookModal = document.createElement('div');
addBookModal.classList = "modal";
addBookModal.id = "add-modal";
backdrop.after(addBookModal);


let newBook = document.querySelector('.h2');
addBookModal.appendChild(newBook);

const research = document.createElement('div');
research.id = "research";
research.classList ="modal-content";
addBookModal.appendChild(research);

const hrTag = document.querySelector('hr');
hrTag.remove();

//****USER INPUT****//
const titreLivre = document.createElement('label');
titreLivre.htmlFor = "titre-livre";
titreLivre.textContent ="Titre du livre";
research.appendChild(titreLivre);

const titleInput = document.createElement('input');
titleInput.type = "text";
titleInput.name = "titre-livre";
titleInput.id = "titre-livre";
research.appendChild(titleInput);

const auteur = document.createElement('label');
auteur.htmlFor = "auteur";
auteur.textContent ="Auteur";
research.appendChild(auteur);

const authorInput = document.createElement('input');
authorInput.type = "text";
authorInput.name = "auteur";
authorInput.id = "auteur";
research.appendChild(authorInput);

//****MODAL ACTIONS****//
const modalActions = document.createElement('div');
modalActions.classList = "modal-actions";
addBookModal.appendChild(modalActions);

const searchBtnModal = document.createElement('button');
searchBtnModal.id = "btn-rechercher";
searchBtnModal.classList = "btn btn-success";
searchBtnModal.textContent = "Rechercher";
modalActions.appendChild(searchBtnModal);

const cancelBtnModal = document.createElement('button');
cancelBtnModal.classList = "btn btn-passive";
cancelBtnModal.textContent = "Annuler";
modalActions.appendChild(cancelBtnModal);

//****SECTION SEARCHBOOK RESULTS****//
const sectionBookSearch = document.createElement('section');
sectionBookSearch.classList = "section-searchbook";
myBooks.after(sectionBookSearch);

const row1 = document.createElement('div');
row1.classList = "row";
sectionBookSearch.appendChild(row1);

const resultsSectionTitle = document.createElement('h2');
resultsSectionTitle.textContent = "Résultats de recherche";
row1.appendChild(resultsSectionTitle);

const row3 = document.createElement('div');
row3.classList = "row";
sectionBookSearch.appendChild(row3);

const bookList = document.createElement('div');
bookList.classList = "book-list";
row3.appendChild(bookList);

//****HEADER****//
const header = document.createElement('header');
sectionBookSearch.before(header);

const nav = document.createElement('nav');
header.appendChild(nav);

const rowLogo = document.createElement('div');
rowLogo.classList="row";
nav.appendChild(rowLogo);

const logo = document.querySelector('.logo');
rowLogo.appendChild(logo);

header.appendChild(myBooks);

//****TEMPLATE*****//
const template = document.createElement('template');
template.id = "book-template";
bookList.appendChild(template);

const documentFragment = template.content; 
bookList.appendChild(documentFragment);

const liElt = document.createElement('li');
liElt.classList = "bookList-list";
documentFragment.appendChild(liElt);

const templateTitle = document.createElement('h5');
templateTitle.classList = "titre";
templateTitle.textContent = "Titre: ";
liElt.appendChild(templateTitle);

const templateid = document.createElement('h6');
templateid.classList = "id";
templateid.textContent = "id: ";
liElt.appendChild(templateid);

const templateAuthor = document.createElement('h5');
templateAuthor.classList = "author";
templateAuthor.textContent = "Auteur: ";
liElt.appendChild(templateAuthor);

const templateDesc = document.createElement('p');
templateDesc.classList = "desc";
templateDesc.textContent = "Description: ";
liElt.appendChild(templateDesc);

const templateImg = document.createElement('img');
templateImg.classList = "thumbnail";
templateImg.src="resources/css/img/unavailable.png"; //resources/css/img/unavailable.png
liElt.appendChild(templateImg);

const anchorBookmark = document.createElement('a');
anchorBookmark.classList="icon-bookmark";
anchorBookmark.href="#";
templateTitle.before(anchorBookmark);
//template.appendChild(anchorBookmark);

const iconBookmark = document.createElement('i');
iconBookmark.classList ="fas fa-bookmark";
iconBookmark.ariaHidden="true";
anchorBookmark.appendChild(iconBookmark);

//****ICON EVENT LISTENER****//
//template.appendChild(anchorBookmark);

//const doc = documentFragment.querySelector('.bookList-list');
//const a = doc.querySelector('.icon-bookmark');



//****LIST OUTPUT****//
const listOutput = document.createElement('div');
listOutput.classList = "list-output";
row3.appendChild(listOutput);

const ul = document.createElement('ul');
ul.classList = "list-books";
listOutput.appendChild(ul);

//****SECTION POCH'LIST****/
const sectionList = document.createElement('section');
sectionList.classList = "section-pochliste";
backdrop.before(sectionList);

const row2 = document.createElement('div');
row2.classList = "row";
sectionList.appendChild(row2);

const contentDivPochList = document.getElementById('content');
row2.appendChild(contentDivPochList);

const pochList = document.createElement('ul');
pochList.classList = "list-pochList";
contentDivPochList.appendChild(pochList);


   ////********- SCRIPT -********////
const toggleBackdropHandler = () => {
    backdrop.classList.toggle('visible');
};
      
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
//    clearBookInput();
};

//Clear userInput
//const clearBookInput = () => {
//  usrInputs[0].value = '';
//  for (const usrInput of userInputs) {
//     usrInput.value = '';
//   }
//};

function onclickSearch  () { 
    showBookModal();
}

const addBookPockListHandler = () => {
    addBookModal.classList.toggle('visible');
    toggleBackdropHandler();
};


btnAddBooks.addEventListener('click', showBookModal);

backdrop.addEventListener('click', backdropClickHandler);
cancelBtnModal.addEventListener('click', cancelBtnHandler);
searchBtnModal.addEventListener('click', onclickSearch);

//******SEND XMLHTTPREQUEST*******/
const btnRechercher = document.getElementById('btn-rechercher');

const listElement = document.querySelector('.list-books'); //<!--results-->

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
             
        }

        xhr.send(JSON.stringify(data));
            
        });      
       return promise; 
  }
    
    async function fetchBooks() {
        
    const title = document.getElementById('titre-livre').value;
    const author = document.getElementById('auteur').value;
    const search = [title, author].join(' ');  //or let search =`${title} + ${author}`; 
        
        //check if both title / author are entered
//        if (title.trim() === '' ) {
//            alert('please enter Title!');
//            return;
//        } else if (author.trim() === '') {
//            alert('please enter Author');
//            return;
//        }
            
        
        
        sectionBookSearch.classList.toggle('visible');
        
//        try {
          const responseData = await sendHttpRequest(
            'GET', 
            "https://www.googleapis.com/books/v1/volumes?q=" + search );
        
        const listOfBooks = responseData; 
            console.log(listOfBooks);
        
            for (i=0; i < listOfBooks.items.length; i++) {
                 console.log(listOfBooks.items[i]);

                const postEl = document.importNode(template.content, true);
                console.log("postEl", postEl);

                //BookMark Icon event
                const target = postEl.querySelector('.icon-bookmark');    
                target.addEventListener('click', () => {
                    console.log("bookmark", listOfBooks.items[i].volumeInfo.title)
                }); 

                postEl.querySelector('.id').textContent = 'id: '+ listOfBooks.items[i].id;
                postEl.querySelector('.titre').textContent = 'Titre: '+ listOfBooks.items[i].volumeInfo.title;
                postEl.querySelector('.author').textContent = 'Auteur: '+ listOfBooks.items[i].volumeInfo.authors;
                postEl.querySelector('.desc').textContent ='Description: '+ listOfBooks.items[i].volumeInfo.description;
                postEl.querySelector('img').src = listOfBooks.items[i].volumeInfo.imageLinks.thumbnail;

                    if (postEl.querySelector('.desc').textContent.length > 200) {
                        postEl.querySelector('.desc').textContent = postEl.querySelector('.desc').textContent.substring(0,200);
                        }

                    if (!postEl.querySelector('img').src) {
                        postEl.querySelector('img').src ="resources/css/img/unavailable.png";
                    }

                listElement.append(postEl); 
            
             
            }  
//        } catch (error) {
//          alert(error.message);
//        }
      
    }  


btnRechercher.addEventListener('click', fetchBooks, false);


//******SESSION STORAGE*******/


