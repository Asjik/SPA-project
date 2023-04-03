// it-spa.js

import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';


import { Home } from './views/Home';
import { Nav } from './navigation/Nav';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { RoomList } from './views/RoomList';

const main = document.querySelector('main');


main.before(Nav());
main.before(Header());



//uzytkownik zaczyna przegladanie od `Home`
main.append(Home());
main.after(Footer());
// konwersja daty
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}


let userDateFrom = document.getElementById("date-from");
let userDateTo = document.getElementById("date-to");
userDateFrom.value = formatDate();
userDateTo.value = formatDate();


const btn = document.getElementById('reservation');
    btn.addEventListener('click', () =>{
        
        let fromDate = new Date(userDateFrom.value);
        let toDate = new Date(userDateTo.value);
        let actualDate = new Date();
        fromDate.setHours(0,0,0,0);
        toDate.setHours(0,0,0,0);
        actualDate.setHours(0,0,0,0);
        console.log(actualDate)
        console.log(fromDate.getTime(), toDate.getTime(), actualDate.getTime())
        if (fromDate.getTime() < actualDate.getTime()) {
            //alert("Data OD jest mniejsza lub rowna od dzisiejszej");
            console.log('Nieprawidłowa data from');
            alert("Wybrana data jest nieprawidłowa")
        }
        else if (toDate.getTime() < actualDate.getTime()) {
            //alert("Data DO jest mniejsza lub rowna od dzisiejszej");
            console.log('Nieprawidłowa data to ');
            alert("Wybrana data jest nieprawidłowa")
        }
        else if  (fromDate.getTime() > toDate.getTime()) {
            //alert("Data DO jest wieksza niz OD");
            console.log('Nieprawidłowa data od do');
            alert("Wybrana data jest nieprawidłowa")
            
        }
        else{
            console.log(fromDate.getTime(), "do" , toDate.getTime());
            const navItem = { name: 'Rooms', component: RoomList };
            const navigationEvent = new CustomEvent('navigate', {
                detail: navItem.component
            });
            document.body.dispatchEvent(navigationEvent);
        }
        
        
        
    });

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
    
    

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  //console.log(navbarToggler)
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  //console.log(responsiveNavItems)
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});


