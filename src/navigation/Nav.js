// Nav.js

import { NavButton } from '../common/NavButton';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { Cart } from '../views/Cart';
import { Login } from '../views/Login';
import {Logo} from '../common/Logo';
import { NavElement } from '../common/NavElement';

export const navItems = [
    { name: 'Strona główna', component: Home },
    { name: 'Apartamenty', component: RoomList },
    { name: 'Zabiegi', component: TreatmentList },
    { name: 'Koszyk', component: Cart },
    { name: 'Logowanie', component: Login }
];

export function Nav() {
    const nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"); 
    nav.setAttribute("id", "mainNav");
    const navElements = (NavElement(navItems));
    nav.innerHTML=`
            <div class="container">
                <a class="navbar-brand" href="#"><i class="fas fa-spa"></i></a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <svg class="svg-inline--fa fa-bars ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg><!-- <i class="fas fa-bars ms-1"></i> Font Awesome fontawesome.com -->
                </button>
            </div>
    `;
    const divContainer = nav.querySelector(".container");
    console.log('container nav', divContainer)
    divContainer.appendChild(navElements);
    return nav;
}


