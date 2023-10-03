"use strict";

async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Не удалось получить данные из data.json ");
    }
    const data = await response.json();
    const cardsDiv = document.querySelector(".cards");
    data.forEach(({ image, card_name, price, color, size, quantity, max }) => {
      const productElem = ` 
        <div class="container">
         <div class="cards__item">
          <img src="${image}" alt="${card_name}" />
          
          <div class="cards__desc">
             <h3 class="cards__heading">${card_name}</h3>
             <div class="cards__txt">Price: <span>$${price}</span></div>
             <div class="cards__txt">Color: ${color}</div>
             <div class="cards__txt">Size: ${size}</div>
             <div class="cards__txt">
              Quantity: <input class="quantity" type="number" name="Quantity" value = "${quantity}" min="1" max ="${max}" />
             </div>
          </div>
          <button class ="cards__xButton"><img src="images/Vector.svg" alt="X"></button>
         </div>
        </div> `;

      cardsDiv.insertAdjacentHTML("beforeend", productElem);
    });
    const closArr = document.querySelectorAll(".xButton");
    closArr.forEach((elem) => {
      elem.addEventListener("click", function (event) {
        elem.closest(cardsDiv).remove();
      });
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
