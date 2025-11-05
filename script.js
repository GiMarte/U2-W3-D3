/* 
Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET. 
Endpoint: https://striveschool-api.herokuapp.com/books 
Requisiti della pagina: 
● Utilizza Bootstrap 5 per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga 
● Ogni colonna avrà al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro:              
 nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo. 
● Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina. 
● EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina. Aggiungi un altro pulsante “Compra ora” vicino a “Scarta” nelle card per aggiungere il libro al carrello. Il carrello dovrà persistere nello storage del browser.
● EXTRA: aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrello
*/
const URLEPI = "https://striveschool-api.herokuapp.com/books";

const getData = function () {
  fetch(URLEPI)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella risposta del server: ");
      }
    })
    .then((arr) => {
      arr.forEach((book) => {
        const createDiv = document.createElement("div");
        const row = document.getElementById("row");
        createDiv.setAttribute("class", "col col-12 col-md-5 col-xl-3 mt-5");
        createDiv.innerHTML = `
                <div class="card h-100 ">
                <img src="${book.img}" class="card-img-top" alt="${book.asin}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>$${book.price}</p>
                    <a href="#" class="btn btn-primary">Select</a>
                </div>
                </div>`;
        row.appendChild(createDiv);
        const div = document.querySelectorAll(".card");
        const btn = document.querySelectorAll(".card .btn");
        btn.forEach((btn,i) => {
          btn.addEventListener("click", (e) => {
            if (e.target) {
              div.forEach((div) => {
                div.style.display = "none";
              });
            }
          });
        });
      });
    })
    .catch((err) => {
      console.log("errore inprevisto", err);
    });
};

getData();
