"use strict";

const userData = JSON.parse(data);
const content = document.querySelector(".contentBox");
const headerElem = document.createElement("h1");
headerElem.textContent = "Сказочная галерея";
headerElem.setAttribute("class", "header");
document.body.prepend(headerElem);

userData.forEach((element) => {
  const contentElem = document.createElement("div");
  contentElem.className = "element";
  content.appendChild(contentElem);

  const h1Elem = document.createElement("h1");
  h1Elem.className = "title";
  h1Elem.textContent = element.name;

  const descrElem = document.createElement("p");
  descrElem.className = "description";
  descrElem.textContent = element.description;

  const byElem = document.createElement("form");
  byElem.setAttribute("class", "byBox");
  byElem.setAttribute("action", "https://dzen.ru");
  byElem.setAttribute("target", "_blank");

  const priceElem = document.createElement("p");
  priceElem.className = "price";
  priceElem.textContent = element.price;

  const buttonElem = document.createElement("button");
  buttonElem.textContent = "Купить";
  buttonElem.setAttribute("class", "button");
  buttonElem.classList.add("pulsate-bck");

  const imgElem = document.createElement("img");
  imgElem.className = "image";
  imgElem.setAttribute("alt", element.alt);
  imgElem.src = element.source;

  contentElem.append(h1Elem, descrElem, byElem, imgElem);
  byElem.append(priceElem, buttonElem);
});
