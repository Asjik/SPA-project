// it-spa.js

import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';


import { Home } from './views/Home';
import { Nav } from './navigation/Nav';
import { Header } from './common/Header';
import { Footer } from './common/Footer';

const main = document.querySelector('main');


main.before(Nav());
main.before(Header());



//uzytkownik zaczyna przegladanie od `Home`
main.append(Home());
main.after(Footer());

//reagujemy na zdarzenie `navigate`
document.body.addEventListener('navigate', event => {
    const Component = event.detail;

  // wstawiamy nowy "widok" do elementu `main`
    main.innerHTML = '';
    main.append(Component());
});



window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };
  /// CHECK Date
    
    const btn = document.getElementById('reservation');

    
    btn.addEventListener('click', function handleClick() {
        let userDateFrom = document.getElementById("date-from").value;
        let userDateTo = document.getElementById("date-to").value;
        let fromDate = new Date(userDateFrom);
        let toDate = new Date(userDateTo);
        let actualDate = new Date();
        fromDate.setHours(0,0,0,0);
        toDate.setHours(0,0,0,0);
        actualDate.setHours(0,0,0,0);
        console.log(actualDate)
        console.log(fromDate.getTime(), toDate.getTime(), actualDate.getTime())
        if (fromDate.getTime() <= actualDate.getTime()) {
            alert("Data OD jest mniejsza lub rowna od dzisiejszej");
            return false;
        }
        else if (toDate.getTime() <= actualDate.getTime()) {
            alert("Data DO jest mniejsza lub rowna od dzisiejszej");
            return false;
        }
        else if  (fromDate.getTime() > toDate.getTime()) {
            alert("Data DO jest wieksza niz OD");
            return false;
        }
        else return true;
    });

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  console.log(navbarToggler)
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  console.log(responsiveNavItems)
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});


