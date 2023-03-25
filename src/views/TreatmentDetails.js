// TreatmentDetails.js

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
        <p>Cena: ${treatment.price} PLN</p>
      </div>
      `;
      
      //div.querySelector('.loading').remove();
    });


  return div;
}

