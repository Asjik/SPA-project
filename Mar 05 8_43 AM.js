// 05-02-2023



// Home.js
export function Home() {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Home</h2>
    <p>Witaj w IT SPA!</p>
    <p>Wszyscy programiści lubią do nas przyjeżdżać.</p>
  `;

  const img = document.createElement('img');
  img.src = require('../assets/support.png');
  img.style.width = '50vw';

  div.append(img);

  return div;

}


// it-spa.js
import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home';
import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

main.before(Nav());

// uzytkownik zaczyna przegladanie od `Home`
main.append(Home());

// reagujemy na zdarzenie `navigate`
document.body.addEventListener('navigate', event => {
  const Component = event.detail;

  // wstawiamy nowy "widok" do elementu `main`
  main.innerHTML = '';
  main.append(Component());
});







// RoomList.js

import { NavButton } from '../common/NavButton';
import { RoomDetails } from './RoomDetails';

export function RoomList() {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Rooms</h2>
    <p class="loading">Ładowanie pokoi...</p>
  `;


  const ul = document.createElement('ul');

  // pobieramy liste wszystkich pokoi
  fetch('http://localhost:3000/rooms')
    .then(response => response.json())
    .then(rooms => {
      const lis = rooms.map(room => {

        const li = document.createElement('li');

        li.innerHTML = `
          <h4>${room.name}</h4>
          <p>
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton('Read more', () => RoomDetails(room.id));
        li.lastElementChild.append(detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector('.loading').remove();
    });


  return div;

}





// Nav.js

import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { NavButton } from '../common/NavButton';

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rooms', component: RoomList },
  { name: 'Treatments', component: TreatmentList }
];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map(item => {
    return NavButton(item.name, item.component);
  });

  nav.append(...navButtons);

  return nav;
}




// RoomDetails.js

export function RoomDetails(roomId) {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Room: ${roomId}</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  // fetch('http://localhost:3000/rooms/' + roomId)
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(response => response.json())
    .then(room => {
      const article = document.createElement('article');

      article.innerHTML = `
        <h3>${room.name}</h3>
        <p>Liczba łóżek: ${room.beds} x 🛌</p>
        <p>Liczba gości: ${room.guests} x 🧑</p>
        <p>${room.description}</p>
        <p>
          <strong>${room.price.toFixed(2)} PLN</strong>
        </p>
      `;

      div.querySelector('.loading').remove();
      div.append(article);
    });

  return div;
}


// TreatmentList.js

import { NavButton } from '../common/NavButton';
import { TreatmentDetails } from './TreatmentDetails';

export function TreatmentList() {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Treatments</h2>
    <p class="loading">Ładowanie zabiegów...</p>
  `;


  const ul = document.createElement('ul');

  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
      const lis = treatments.map(treatment => {

        const li = document.createElement('li');

        li.innerHTML = `
          <h4>${treatment.name}</h4>
          <p>
            <strong>${treatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton('Read more', () => TreatmentDetails(treatment.id));
        li.lastElementChild.append(detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector('.loading').remove();
    });


  return div;

}



// TreatmentDetails.js

export function TreatmentDetails(treatmentId) {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Treatment: ${treatmentId}</h2>
    <p class="loading">Ładuję zabieg...</p>
  `;

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then(response => response.json())
    .then(treatment => {
      const article = document.createElement('article');

      article.innerHTML = `
        <h3>${treatment.name}</h3>
        <p>💪 ${treatment.area}</p>
        <p>⌚ ${treatment.time}</p>
        <p>
          <strong>${treatment.price.toFixed(2)} PLN</strong>
        </p>
      `;

      div.querySelector('.loading').remove();
      div.append(article);
    });

  return div;
}


// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date


// cartManager.js

const key = 'it_spa_cart';


/* 
  {
    'Pokój binarny': { price: 170, quantity: 2 }
  }
*/

export const cartManager = {

  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1 }
      };
    }
    else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
      }
      else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1 }
        };

        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);
      
      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        }
        else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    }
    else {
      const content = JSON.parse(cart);

      // [['Pokój unarny', { price: 170, quantity: 1 }], ['Pokój binarny, { price: 140, quantity: 3 }], itd.]
      return Object.entries(content).map(entry => {
        const [name, value] = entry;
        const { price, quantity } = value;

        return {
          name, // rownowazne z --> name: name,
          price,
          quantity
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return '0.00';
    }
    else {
      const content = JSON.parse(cart);

      // [{ price: 170, quantity: 1 }, { price: 140, quantity: 3 }, itd.]
      return Object.values(content)
                   .reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)
                   .toFixed(2);
    }
  }

};



// Button.js

export function Button(text, onClickCallback) {

  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = text;

  button.addEventListener('click', onClickCallback);

  return button;
  
}


// RoomList.js

import { NavButton } from '../common/NavButton';
import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { cartManager } from '../cart/cartManager';

export function RoomList() {

  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Rooms</h2>
    <p class="loading">Ładowanie pokoi...</p>
  `;


  const ul = document.createElement('ul');

  // pobieramy liste wszystkich pokoi
  fetch('http://localhost:3000/rooms')
    .then(response => response.json())
    .then(rooms => {
      const lis = rooms.map(room => {

        const li = document.createElement('li');

        li.innerHTML = `
          <h4>${room.name}</h4>
          <p>
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const addToCartButton = Button('Add to cart', () => cartManager.addItem(room));
        const detailsButton = NavButton('Read more', () => RoomDetails(room.id));
        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector('.loading').remove();
    });


  return div;

}



// - - - - - - - - - - - - - - - - Cart.js - - - - - - - - - - - - - - - - - - -

// Cart.js

import { cartManager } from '../cart/cartManager';
import { NavButton } from '../common/NavButton';

export function Cart() {
  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Cart</h2>
    <p>Przeglądaj zawartość koszyka.</p>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </table>
  `;

  const tableRows = cartManager.getAllItems().map(item => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td></td>
    `;

    const removeItemButton = NavButton('🗑️', () => {
      cartManager.removeItem(item);
      return Cart;
    });

    tr.lastElementChild.append(removeItemButton);

    return tr;
  });

  const tableFooter = document.createElement('tr');

  tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td>
      Total = <strong>${cartManager.getTotalPrice()} PLN</strong>
    </td>
    <td></td>
  `;

  div.querySelector('.table').append(...tableRows, tableFooter);

  return div;
}


//  w Nav.js dodaj:
//   { name: '🛒', component: Cart }















