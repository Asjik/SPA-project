import { Date } from "./Date";

export function Header() {
    const header = document.createElement('header');
    header.classList.add('masthead')
    header.innerHTML= `
    <div class="container">
        <div class="masthead-subheading">Witaj w naszym SPA!</div>
        <div class="masthead-heading text-uppercase">Miło Cię widzieć</div>
        <input type="date" id="date-from" name="from" value="2023-03-24" >
        <input type="date" id="date-to" name="to" value="2023-03-24">
        <a id="reservation" class="btn btn-primary btn-xl text-uppercase" href="#services">Zarezerwuj pobyt</a>
    </div>
    `;
   
    return header;

}