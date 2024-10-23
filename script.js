// Ottengo i dati forniti dall'user

const userName = document.getElementById("input-name");
const kilometers = document.getElementById("input-chilometri");
const userAgeRequest = document.getElementById("age-container");
const buttonGenera = document.getElementById("button-genera");

// ---------------------------CALCOLO PREZZO BIGLIETTO---------------------------
function priceCounter(kilometersAdded, ageOfPassenger) {
  // sconti da applicare
  const totalPrice = kilometersAdded * 0.21;

  const normalPrice = 0;
  const minorDiscount = (totalPrice / 100) * 20;
  const majorDiscount = (totalPrice / 100) * 40;

  let totalPriceDiscounted = 0;

  if (ageOfPassenger == 1) {
    return (totalPriceDiscounted = totalPrice - minorDiscount);
  } else if (ageOfPassenger == 2) {
    return (totalPriceDiscounted = totalPrice - normalPrice);
  } else if (ageOfPassenger == 3) {
    return (totalPriceDiscounted = totalPrice - majorDiscount);
  }
}

// ---------------------------RIPORTO A SCHERMO I RISULTATI---------------------------

buttonGenera.addEventListener("click", () => {
  const numberOfKilometers = parseInt(kilometers.value);
  const userAge = userAgeRequest.value;
  //   console.log(numberOfKilometers);
  //   console.log(userAge);

  let finisPrize = priceCounter(numberOfKilometers, userAge);

  console.log("Il prezzo finale è di €", finisPrize);
});

// conso)e.log(userNameEl);
// console.log(userNameEl.value);
// console.log(kilometersEl);
// console.log(kilometersEl.value);
// console.log(userAgeEl);
// console.log(userAgeEl.value);
