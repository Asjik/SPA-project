


// export function Logo(){
//     const divLogo = document.createElement('div');
//     divLogo.classList.add('logo');
//     const logo = document.createElement('a');
//     logo.setAttribute('href','#page-top')
//     logo.innerHTML = `
//         <img src="https://www.svgrepo.com/show/96187/diskette.svg" alt="logo" />
//     `;
//     divLogo.append(logo)
//     return divLogo;

// }

export function Logo(){
    const logo = document.createElement('a');
    logo.classList.add('navbar-brand');
    logo.setAttribute('href','#page-top')
    logo.innerHTML = `
        <img src="https://www.svgrepo.com/show/96187/diskette.svg" alt="logo" />
    `;

    return logo

}