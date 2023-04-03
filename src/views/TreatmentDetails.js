// TreatmentDetails.js
import { Button } from '../common/Button';
import { cartManager } from '../cart/cartManager';
export function TreatmentDetails(treatmentId) {
  
  const div = document.createElement('div');
  div.setAttribute("class", "card")
  



  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then(response => response.json())
    .then(treatment => {
      div.innerHTML = `
      <div class="card-pic-wrap">
        <img src="${treatment.photo}" alt="${treatment.name}">
      </div>
      <div class="card-content">
        <h3>${treatment.name}</h3>
        <p>Czas trwania zabiegu: ${treatment.time} min</p>
        <p>Cena: od <strong>${treatment.price} PLN</strong></p>
      </div>
      `;
      const addToCartButton = Button('Dodaj do koszyka', () => cartManager.addItem(treatment), 'btn btn-light');
      div.querySelector('.card-content').append(addToCartButton);
    });


  return div;
}

