document.getElementById("year").innerText = new Date().getFullYear();

const addressBarContent = new URLSearchParams(location.search);
const productId = addressBarContent.get("productId");
document.addEventListener("DOMContentLoaded", function () {
  const spinner = document.getElementById("loadingSpinner");

  const getProductData = function () {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
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
      .then((product) => {
        console.log("Product details retrieved", product);
        document.getElementById("imageUrl").src = product.imageUrl;
        document.getElementById("brand").innerText = product.brand;
        document.getElementById("description").innerText = product.description;
        document.getElementById("price").innerText = product.price + "$";
        const nameElements = document.getElementsByClassName("name");
        for (let i = 0; i < nameElements.length; i++) {
          nameElements[i].innerText = product.name;
          spinner.style.visibility = "hidden";
        }
      })
      .catch((err) => {
        console.error("Error", err);
        alert(`An error occurred: ${err.message}`);
      });
  };

  getProductData();
});
