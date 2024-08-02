//2)DA FARE:  AGGIUNGI UN INDICATORE DI CARICAMENTO AFFIANCO AL TITOLO PRINCIPALE DELLA PAGINA DURANTE IL CARICAMENTO DELLE RISORSE

document.getElementById("year").innerText = new Date().getFullYear();

const generateCards = function (arrayElement) {
  const row = document.getElementById("stampa-qui");
  arrayElement.forEach((element) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="${element.imageUrl}" class="card-img-top img-fluid"  alt="immagine carta">
        <div class="card-body bg-dark d-flex flex-column">
          <h5 class="card-title text-danger fs-3 text-center border-bottom border-danger">${element.name}</h5>
          <h6 class="card-title fs-5 text-danger text-start">${element.brand}</h6>
          <p class="card-text text-white text-truncate ">${element.description}</p>
          <p class="card-text text-warning">${element.price}$</p>
          <div class="d-flex justify-content-between align-items-end">
            <a href="details.html?productId=${element._id}" class="btn btn-warning fw-bold">Esplora</a>
            <a href="backoffice.html?productId=${element._id}" class="btn btn-danger">Modifica</a>
          </div>
        </div>
      </div>
      `;
    row.appendChild(newCol);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const spinner = document.getElementById("loadingSpinner");

  const getProducts = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGE1MDgxODQ0MjAwMTUzNzU4OGUiLCJpYXQiOjE3MTUzMjk2MTYsImV4cCI6MTcxNjUzOTIxNn0.My05IqCX0fyFysTjrvNuK7tzPXxBY4eQ1i8Kl-2qttw",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("OK", response);
          return response.json();
        } else {
          switch (response.status) {
            case 401:
              throw new Error(
                "Errore 401: Non autorizzato. Assicurati di avere le credenziali corrette."
              );
            case 403:
              throw new Error(
                "Errore 403: Accesso negato. Non hai i permessi per accedere a questa risorsa."
              );
            case 404:
              throw new Error(
                "Errore 404: Risorsa non trovata. Verifica l'URL e riprova."
              );
            case 500:
              throw new Error(
                "Errore 500: Errore interno del server. Riprova più tardi."
              );
            case 502:
              throw new Error(
                "Errore 502: Il server ha ricevuto una risposta non valida."
              );
            case 503:
              throw new Error(
                "Errore 503: Il server non è attualmente disponibile (sovraccarico o in manutenzione)."
              );
            case 504:
              throw new Error(
                "Errore 504: Il server ha impiegato troppo tempo a rispondere."
              );
            default:
              if (response.status >= 400 && response.status < 500) {
                throw new Error(
                  `Errore client ${response.status}: ${response.statusText}`
                );
              } else if (response.status >= 500 && response.status < 600) {
                throw new Error(
                  `Errore server ${response.status}: ${response.statusText}`
                );
              }
              throw new Error(`${response.status}: ${response.statusText}`);
          }
        }
      })
      .then((array) => {
        console.log(array);
        generateCards(array);
        spinner.style.visibility = "hidden";
      })
      .catch((err) => {
        console.error("ERRORE!", err.message);
        alert(`An error occurred: ${err.message}`);
      });
  };

  getProducts();
});
