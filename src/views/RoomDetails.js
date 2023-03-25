// RoomDetails.js

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
        <p>Liczba łóżek: ${room.beds} x 🛌</p>
        <p>Liczba gości: ${room.guests} x 🧑</p>
        <p>${room.description}</p>
        <p>
          <strong>${room.price.toFixed(2)} PLN</strong>
        </p>
      </article>
      `;

      div.querySelector('.loading').remove();
      divRoomText.append(article)
      div.append(divPhoto);
      div.append(divRoomText);
    });
    section.append(div)
  return section;
}
