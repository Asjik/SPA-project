// RoomList.js

import { NavButton } from '../common/NavButton';
import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';
import { cartManager } from '../cart/cartManager';


export function RoomList() {
  const section = document.createElement('section');
  section.setAttribute("class","page-section")
  section.setAttribute("id","rooms")
  const div = document.createElement('div');
  div.setAttribute("class","container");
  
  div.innerHTML = `
  <div class="text-center">
      <h2 class="section-heading text-uppercase">Apartamenty</h2>
      <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      <p class="loading">Ładowanie pokoi...</p>
  </div>
  `;

  const divRoom = document.createElement('div');
  divRoom.setAttribute("class", "rooms-info");
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'room-list')
  // pobieramy liste wszystkich pokoi
  fetch('http://localhost:3000/rooms')
    .then(response => response.json())
    .then(rooms => {
      const lis = rooms.map((room, index )=> {

        const li = document.createElement('li');
        li.setAttribute("class", "room-card")
        // dodoanie zdjęcia
        li.innerHTML = `

        <div class="room-card__bg">
          <img class="room-pic__img" src=${room.photo} alt=${room.name}/>
        </div>
        <div class="room-card__footer">
          <span>od<strong>${room.price.toFixed(2)} PLN</strong></span>
          <div class="room-card__content">
            <h4>${room.name}</h4>
          </div>
        </div>  
        
        `;
        //console.log('room', room)
        const addToCartButton = Button('Dodaj do koszyka', () => cartManager.addItem(room),'btn btn-light');
        const detailsButton = NavButton('Zobacz szczegóły', () => RoomDetails(room.id),'btn btn-light');
        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector('.loading').remove();
      section.append(div);
    });


  return section;

}
