/*Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET. 
Endpoint: https://striveschool-api.herokuapp.com/books 
Requisiti della pagina: 
●Utilizza Bootstrap 5 per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga 
●Ogni colonna avrà al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro:
nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo. 
●Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina. 
●EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina. Aggiungi un altro pulsante “Compra ora” 
vicino a “Scarta” nelle card per aggiungere il libro al carrello. Il carrello dovrà persistere nello storage del browser. 
●EXTRA: aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrello
`
*/

const getLibrary = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("Ok", response);
        return response.json();
      } else {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Client error");
        } else if (response.status >= 500 && response.status < 600) {
          throw new Error("Server error");
        }
      }
    })
    .then((arrayofBooks) => {
      console.log("Libri estratti", arrayofBooks);
      generateInnerCards(arrayofBooks);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

getLibrary();
generateInnerCards = (arrayofBooks) => {
  const row = document.querySelector(".row");
  arrayofBooks.forEach((element) => {
    const col = document.createElement("div");
    col.className = "col mb-5";
    col.innerHTML = `
        <div class="card h-100 position-relative">
          <img src="${element.img}" class="card-img-top h-75" alt="${element.title}">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text mb-4">${element.price}€</p>
            <a href="#" class="btn btn-danger discard position-absolute  bottom-0 end-0 me-2 mb-1">Scarta</a>
            <a href="#" class="btn btn-success buyNow position-absolute bottom-0 start-0 ms-2 mb-1">Compra ora</a>
          </div>
        </div>
      `;
    row.appendChild(col);
  });

  document.querySelectorAll(".discard").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const cardRemoved = button.closest(".col");
      cardRemoved.remove();
    });
  });

  document.querySelectorAll(".buyNow").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const card = button.closest(".col");
      const clonedCardBody = document.createElement("div");
      const titleCard = card.querySelector(".card-title").cloneNode(true);
      clonedCardBody.appendChild(titleCard);
      const priceCard = card.querySelector(".card-text").cloneNode(true);
      clonedCardBody.appendChild(priceCard);
      const imgCard = card.querySelector(".card-img-top").cloneNode(true);
      clonedCardBody.appendChild(imgCard);
      imgCard.style.width = "150px";
      addToCart(clonedCardBody);
      localStorage.setItem("cart", clonedCardBody.outerHTML);
    });
  });

  function addToCart(cardBody) {
    const cart = document.getElementById("carrello");
    const item = document.createElement("li");
    item.className = "list-group-item mt-3 ms-3";
    item.appendChild(cardBody);
    cart.appendChild(item);

    const removeButtonfromCart = document.createElement("button");
    removeButtonfromCart.className = "btn btn-danger remove";
    removeButtonfromCart.innerText = "Rimuovi";
    removeButtonfromCart.style.marginTop = "10px";
    item.appendChild(removeButtonfromCart);
    removeButtonfromCart.addEventListener("click", (event) => {
      event.preventDefault();
      item.remove();
      localStorage.removeItem("cart");
    });
  }
};
