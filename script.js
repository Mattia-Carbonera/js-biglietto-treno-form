// Ottengo i dati forniti dall'user

const userName = document.getElementById("input-name");
const kilometers = document.getElementById("input-chilometri");
const userAgeRequest = document.getElementById("age-container");
const buttonGenera = document.getElementById("button-genera");

const userTicketEl = document.querySelector(".ticket-detalis-container");

// --------------------------- CALCOLO PREZZO BIGLIETTO ---------------------------
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

// --------------------------- TROVO ETA PASSEGGERO ---------------------------

function selectedAge(ageOfPassenger) {
  if (ageOfPassenger == 1) {
    return "Biglietto per minori";
  } else if (ageOfPassenger == 2) {
    return "Biglietto intero";
  } else if (ageOfPassenger == 3) {
    return "Niglietto per over 65";
  }
}

// --------------------------- RIPORTO A SCHERMO I RISULTATI ---------------------------

buttonGenera.addEventListener("click", () => {
  const passengerName = userName.value;
  const numberOfKilometers = parseInt(kilometers.value);
  const userAge = userAgeRequest.value;
  //   console.log(numberOfKilometers);
  //   console.log(userAge);

  const passengerAge = selectedAge(userAge);
  let finisPrize = priceCounter(numberOfKilometers, userAge);

  console.log(
    `Gentile ${passengerName} il prezzo finale è di € ${finisPrize.toFixed(2)}`
  );
  // --------------------------- STAMPO A SCHERMO IL TICKET ---------------------------

  userTicketEl.innerHTML = `<div class="ticket-detalis mt-5 pt-3 border bg-light">
          <h2 class="text-center">IL TUO BIGLIETTO</h2>
          <div class="passenger-detalis row text-center mt-5">
            <div class="name-passenger-request col-4">
              <h3>Dettaglio passeggeri</h3>
              <div class="name-passengher mt-5 mb-5">${passengerName}</div>
            </div>
            <div class="generic-detalis-titol col-8">
              <div class="titol-detalis row text-center">
                <div class="offerta col-4">Offerta</div>
                <div class="offerta col-2">Carrozza</div>
                <div class="offerta col-2">CodiceCP</div>
                <div class="offerta col-4">Costo biglietto</div>
              </div>
              <div class="generic-detalis row mt-5">
                <div class="offerta col-4">${passengerAge}</div>
                <div class="offerta col-2">5</div>
                <div class="offerta col-2">92911</div>
                <div class="offerta col-4">${finisPrize.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>`;

  userName.value = "";
  kilometers.value = "";
  userAgeRequest.value = 0;
});

// console.log(userName);
// console.log(userName.value);
// console.log(kilometers);
// console.log(kilometers.value);
// console.log(userAgeRequest);
// console.log(userAgeRequest.value);
// console.log(userTicketEl);
// console.log(userTicketEl.value);
