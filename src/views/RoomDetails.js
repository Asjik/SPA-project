// RoomDetails.js
import { Button } from '../common/Button';
import { cartManager } from '../cart/cartManager';

export function RoomDetails(roomId) {

  const section = document.createElement('section');
  section.setAttribute("class","page-section")
  section.setAttribute("id","room-details")
  const div = document.createElement('div');
  div.setAttribute("class","container");
  div.setAttribute("id","single-room")

  div.innerHTML = `
    <p class="loading">Ładuję pokój...</p>
  `;

  // fetch('http://localhost:3000/rooms/' + roomId)
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(response => response.json())
    .then(room => {
      const article = document.createElement('article');
      const divPhoto = document.createElement('div');
      divPhoto.setAttribute("class","room-photo")
      const divRoomText = document.createElement('div');
      divRoomText.setAttribute("class","room-text")
      divPhoto.innerHTML = `
          <img class="room-pic__img" src=${room.photo} alt=${room.name}/>
      `;
      divRoomText.innerHTML = `
      <article>
        <h3>${room.name}</h3>
        <div class="facilities">
          <h4>Wyposażenenie</h4>
          <ul class="facilities__list">
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-bed"></i> </span>
              <span class="facilities__text"> x ${room.beds} łóżek</span>
            </li>
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-person"></i> </span>
              <span class="facilities__text"> x ${room.guests} gości</span>
            </li>
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-wifi"></i></span>
              <span class="facilities__text">Internet w pokoju</span>
            </li>
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-fan"></i></span>
              <span class="facilities__text">Klimatyzacja</span>
            </li>
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-shower"></i></span>
              <span class="facilities__text">Łazienka w pokoju</span>
            </li>
            <li class="facilities__item"
              <span class="facilities__icon"><i class="fas fa-tv"></i></span>
              <span class="facilities__text">Telewizor</span>
            </li>
          </ul>
        <p>${room.description}</p>
        <div class="room__reservation">
            <p>
              <strong>od ${room.price.toFixed(2)} PLN</strong>
            </p>
        </div>
        </div>
        <div class="details__bottom">
          <h5>Ważne informacje</h5>
          <div class="details__bottom__policy">
            <h6><span>przyjazd</span><strong>15:00</strong></h6>
            <h6><span>wyjazd</span><strong>10:00</strong></h6>
          </div>
        </div>
      </article>
      `;
      const addToCartButton = Button('Dodaj do koszyka', () => cartManager.addItem(room),'btn btn-light');
      divRoomText.querySelector('.room__reservation').append(addToCartButton);
      div.querySelector('.loading').remove();
      divRoomText.append(article)
      div.append(divPhoto);
      div.append(divRoomText);
    });
    section.append(div)
  return section;
}
