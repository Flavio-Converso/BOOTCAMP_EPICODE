document.getElementById("year").innerText = new Date().getFullYear();

class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const addressBarContent = new URLSearchParams(location.search);
const productId = addressBarContent.get("productId");
console.log(productId);

const getProductData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGE1MDgxODQ0MjAwMTUzNzU4OGUiLCJpYXQiOjE3MTUzMjk2MTYsImV4cCI6MTcxNjUzOTIxNn0.My05IqCX0fyFysTjrvNuK7tzPXxBY4eQ1i8Kl-2qttw",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli del prodotto");
      }
    })
    .then((element) => {
      console.log("DETTAGLI RECUPERATI", element);
      document.getElementById("name").value = element.name;
      document.getElementById("description").value = element.description;
      document.getElementById("brand").value = element.brand;
      document.getElementById("imageUrl").value = element.imageUrl;
      document.getElementById("price").value = element.price;
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

const submitProduct = function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const priceInput = document.getElementById("price");
  const imageUrlInput = document.getElementById("imageUrl");

  const productFromForm = new Product(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imageUrlInput.value,
    priceInput.value
  );

  console.log("Product", productFromForm);

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(productFromForm),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGE1MDgxODQ0MjAwMTUzNzU4OGUiLCJpYXQiOjE3MTUzMjk2MTYsImV4cCI6MTcxNjUzOTIxNn0.My05IqCX0fyFysTjrvNuK7tzPXxBY4eQ1i8Kl-2qttw",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`Product ${productId ? "modified" : "created"}!`);
        window.location.href = "index.html";
      } else {
        throw new Error("Error while saving the product!");
      }
    })
    .catch((err) => {
      console.log("ERROR", err);
      alert(err);
    });
};

let btnCreate = document.getElementById("btnCreate");
let creatingForm = document.getElementById("creating-form");
btnCreate.addEventListener("click", function (event) {
  event.preventDefault();
  if (creatingForm.checkValidity()) {
    submitProduct(event);
  } else {
    creatingForm.reportValidity();
  }
});

if (productId) {
  let creaNascosto = document.getElementById("btnCreate");
  creaNascosto.style.display = "none";
  let btnContainer = document.getElementById("btnContainer");
  btnContainer.innerHTML = `
    <button id="btnModify2" class="btn btn-warning btn-lg">Modify</button>
    <button id="btnDelete" class="btn btn-danger btn-lg" >Delete</button>
    <button id="btnReset" type="reset" class="btn btn-info btn-lg">Emtpy Form</button>
   <a href="index.html"> <button id="annulla" type="button" class="btn btn-dark btn-lg" >Back to home</button></a>
  `;
  if (productId) {
    let btnReset = document.getElementById("btnReset");
    if (btnReset) {
      btnReset.addEventListener("click", function (event) {
        const confirmation = confirm(
          "Are you sure you want to reset the form?"
        );
        if (!confirmation) {
          event.preventDefault();
        }
      });
    }
  }

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    headers: {
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
      let linkModificato = (document.getElementById(
        "backofficeLink"
      ).textContent = `Backoffice -  ${product.name}`);

      let adminMode = document.getElementById("adminMode");
      adminMode.classList.remove("text-white");
      adminMode.classList.add("fs-1", "text-danger");
      adminMode.textContent = "ADMIN MODE";

      linkModificato.innerText = product.name;
      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("brand").value = product.brand;
      document.getElementById("imageUrl").value = product.imageUrl;
      document.getElementById("price").value = product.price;
    })
    .catch((err) => {
      console.error("Error", err);
      alert(`An error occurred: ${err.message}`);
    });
}

//
//
//FUNZIONE PER IL DELETE
if (productId) {
  const btnDelete = document.getElementById("btnDelete");
  if (btnDelete) {
    btnDelete.addEventListener("click", function (event) {
      event.preventDefault();
      const confirmation = confirm(
        "Are you sure you want to delete this product?"
      );
      if (confirmation) {
        deleteProduct(productId);
      }
    });
  }
}

function deleteProduct(productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGE1MDgxODQ0MjAwMTUzNzU4OGUiLCJpYXQiOjE3MTUzMjk2MTYsImV4cCI6MTcxNjUzOTIxNn0.My05IqCX0fyFysTjrvNuK7tzPXxBY4eQ1i8Kl-2qttw",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Product deleted successfully");
        window.location.href = "index.html";
      } else {
        throw new Error("Failed to delete the product");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Error: " + err.message);
    });
}

//FUNZIONE DI MODIFICA
function modifyProduct(productId) {
  const productData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: document.getElementById("price").value,
  };
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGE1MDgxODQ0MjAwMTUzNzU4OGUiLCJpYXQiOjE3MTUzMjk2MTYsImV4cCI6MTcxNjUzOTIxNn0.My05IqCX0fyFysTjrvNuK7tzPXxBY4eQ1i8Kl-2qttw",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Product modified successfully");
        window.location.href = "index.html";
      } else {
        throw new Error("Failed to modify the product");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Error: " + err.message);
    });
}
//CONFERMA
const btnModify2 = document.getElementById("btnModify2");
if (btnModify2 && creatingForm) {
  btnModify2.addEventListener("click", function (event) {
    event.preventDefault();
    if (creatingForm.checkValidity()) {
      const confirmation = confirm(
        "Are you sure you want to modify this product?"
      );
      if (confirmation) {
        modifyProduct(productId);
      }
    } else {
      creatingForm.reportValidity();
    }
  });
}
