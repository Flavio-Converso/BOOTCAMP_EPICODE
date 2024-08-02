document.addEventListener("DOMContentLoaded", function () {
  const nomeSalvato = document.getElementById("nomeSalvato");
  const nomeInStorage = localStorage.getItem("Nome");

  if (nomeInStorage) {
    nomeSalvato.textContent = nomeInStorage;
  }
});

const inputNome = document.getElementById("nome");

document.getElementById("salva").addEventListener("click", function () {
  localStorage.setItem("Nome", inputNome.value);
  nomeSalvato.textContent = inputNome.value;
  document.getElementById("nome").value = "";
});

document.getElementById("rimuovi").addEventListener("click", function () {
  localStorage.removeItem("Nome");
  nomeSalvato.textContent = "";
});

//

let timer = sessionStorage.getItem("timer");
const contatore = function () {
  timer++;
  document.getElementById("timer").innerHTML = timer;
  sessionStorage.setItem("timer", timer);
};
setInterval(contatore, 1000);
