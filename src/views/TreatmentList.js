// TreatmentList.js

import { NavButton } from '../common/NavButton';
import { TreatmentDetails } from './TreatmentDetails';
import { Button } from '../common/Button';
import { cartManager } from '../cart/cartManager';


export function TreatmentList() {

  const section = document.createElement('section');
  section.setAttribute("class","page-section")
  section.setAttribute("id","treatments")
  const div = document.createElement('div');
  div.setAttribute("class","container");

  div.innerHTML = `
  <div class="text-center">
    <h2 class="section-heading text-uppercase">Zabiegi Spa</h2>
    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    <p class="loading">Ładowanie zabiegów...</p>
</div>
  `;


  const ul = document.createElement('ul');
  const divTreatment = document.createElement('div');
  divTreatment.setAttribute("class", "treatment-info");
  ul.setAttribute('class', 'treatment-list')
  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
      const lis = treatments.map((treatment, index) => {

        const li = document.createElement('li');
        li.setAttribute("class", "treatment-card")

        li.innerHTML = `
        
        <div class="treatment-card__bg">
        <img class="treatment-pic__img" src=${treatment.photo} alt=${treatment.name}/>
      </div>
      <div class="treatment-card__footer">
        <span>od <strong>${treatment.price.toFixed(2)} PLN</strong></span>
        <div class="treatment-card__content">
          <h4>${treatment.name}</h4>
        </div>
      </div>  
        `;
        const addToCartButton = Button('Dodaj do koszyka', () => cartManager.addItem(treatment), 'btn btn-light');
        const detailsButton = NavButton('Zobacz szczegóły', () => TreatmentDetails(treatment.id), 'btn btn-light');
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
