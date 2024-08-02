class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(User2) {
    if (this.age < User2.age) {
      return User2.firstName + " è più vecchio di" + this.firstName;
    } else if (this.age > User2.age) {
      return User2.firstName + " è più giovane di" + this.firstName;
    } else {
      return User2.firstName + " e " + this.firstName + " hanno la stessa età";
    }
  }
}
let user1 = new User("Mario", "Rossi", "43", "Roma");
let user2 = new User("Giorgio", "Giorgi", "43", "Milano");

console.log(user1.compareAge(user2));
//
//
const petNameField = document.getElementById("petName");
const ownerNameField = document.getElementById("ownerName");
const speciesField = document.getElementById("species");
const breedField = document.getElementById("breed");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  checkOwnerName(pet2) {
    return this.ownerName === pet2.ownerName;
  }
}

const renderList = function () {
  petList.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const newLi = document.createElement("li");
    newLi.innerText = `Nome: ${pet.petName}, proprietario: ${pet.ownerName}, specie: ${pet.species}, razza: ${pet.breed}`;
    petList.appendChild(newLi);
  }
};

addButton.onclick = function () {
  let newPet = new Pet(
    petNameField.value,
    ownerNameField.value,
    speciesField.value,
    breedField.value
  );
  pets.push(newPet);
  renderList();
  petNameField.value = "";
  ownerNameField.value = "";
  speciesField.value = "";
  breedField.value = "";
};
