// Home.js
import { AboutUs } from '../common/AboutUs';
import { Opinion } from '../common/Opinion';
{}

export function Home() {

  const div = document.createElement('div');

  // div.innerHTML = `
  //   <h2>Home</h2>
  //   <p>Witaj w IT SPA!</p>
  //   <p>Wszyscy programiści lubią do nas przyjeżdżać.</p>
  // `;

  // const img = document.createElement('img');
  // img.src = require('../assets/support.png');
  // img.style.width = '50vw';

  // div.append(img);

  div.append(AboutUs())
  div.append(Opinion())

  return div;

}
