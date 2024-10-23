// Ottengo i dati forniti dall'user

const userName = document.getElementById("input-name");
const kilometers = document.getElementById("input-chilometri");
const userAge = document.getElementById("age-container");
const buttonGenera = document.getElementById("button-genera");

buttonGenera.addEventListener("click", () => {
  const numberOfKilometers = parseInt(kilometers.value);
  console.log(numberOfKilometers);
});

// conso)e.log(userNameEl);
// console.log(userNameEl.value);
// console.log(kilometersEl);
// console.log(kilometersEl.value);
// console.log(userAgeEl);
// console.log(userAgeEl.value);
