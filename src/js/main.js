"use strict";

import moment from "moment";

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

const welcome = (name, age) => {
  console.log(`Witaj ${name}, masz ${age} lat!`);
};

welcome("Karol", 30);

const navigationSwitcher = document.querySelector(".navigation__switcher--js")

navigationSwitcher.addEventListener('click', (e) => {

  const navigationList = document.querySelector('.navigation__list--js');
  if (navigationList.classList.toggle('navigation__list--visible')) {
      const navigationSwitcherX = document.querySelector('.navigation__switcherX--js')
      navigationSwitcherX.innerHTML = '<button class="navigation__switcherX navigation__switcherX--js">X</button>';
  }else{
      console.log('po kliknięciu w przycisk otwierania menu ikona powinna się zmienić');
  }
});
