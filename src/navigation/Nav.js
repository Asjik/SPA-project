// Nav.js

import { NavButton } from '../common/NavButton';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { Cart } from '../views/Cart';
import { Login } from '../views/Login';
import {Logo} from '../common/Logo';
import { NavElement } from '../common/NavElement';

const navItems = [
    { name: 'Home', component: Home },
    { name: 'Rooms', component: RoomList },
    { name: 'Treatments', component: TreatmentList },
    { name: 'Cart', component: Cart },
    { name: 'Login', component: Login }
];

// /// BEZ BOOTSTRAP
// export function Nav() {
//     const nav = document.createElement('nav');
//     nav.setAttribute("class","nav");
//     const mediaButton = document.createElement('div');
//     mediaButton.setAttribute("class","media_button");
//     const button = document.createElement('button');
//     button.setAttribute("class","main_media_button");
//     button.setAttribute("id","mediaButton");

//     mediaButton.append(button);
//     const navElements = (NavElement(navItems));
//     nav.append(Logo());
//     nav.append(navElements); /// elementy nav jako lista ul>li
//     nav.append(mediaButton);

//     let mainListDiv = document.getElementById("mainListDiv");
//     let respButton = document.getElementById("mediaButton");
//     console.log(mainListDiv)
//     console.log(respButton)
// //     media.onclick = function () {
    
// //     "use strict";
    
// //     mainListDiv.classList.toggle("show_list");
// //     mediaButton.classList.toggle("active");
    
// // };

    

//     return nav;
// }

/// Z UŻYCIEM BOOTSTRAP
export function Nav() {
    const nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark fixed-top"); //bootstrap class
    nav.setAttribute("id", "mainNav");
    const container = document.createElement('div');
    container.setAttribute("class", "container");
    // const navButtons = navItems.map(item => {
    //     return NavButton(item.name, item.component);
    // });


    const navElements = (NavElement(navItems));
 /// mobilny hamburger bootstrap
    const button = document.createElement('button');
    button.setAttribute('class','navbar-toggler');
    button.setAttribute('type','button');
    button.setAttribute('data-bs-toggle','collapse');
    button.setAttribute('data-bs-target','navbarResponsive');
    button.setAttribute('aria-controls','navbarResponsive');
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Toggle navigation');
    button.innerHTML=`
        Menu
        <i class="fas fa-bars ms-1"></i>
        `;
    
    
    // const icon = document.createElement('span');
    // icon.setAttribute('class','navbar-toggler-icon')
    // button.append(icon)

    const logo = document.createElement('a');
    logo.classList.add('navbar-brand');
    logo.setAttribute('href','#')
    logo.innerHTML = `
        <img src="https://www.svgrepo.com/show/96187/diskette.svg" alt="logo" />
    `;

    //nav.append(logo);
   
    nav.append(button);
    nav.append(navElements); /// elementy nav jako lista ul>li
    
    //nav.append(...navButtons) // elementy nav jako przyciski
 
   

    return nav;
}
