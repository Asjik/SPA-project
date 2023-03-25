
// export function NavElement(navItems){
//     const div = document.createElement('div'); 
//     div.setAttribute("class","main_list");
//     div.setAttribute("id","mainListDiv");

//     const ul = document.createElement('ul');
//     const navElements = navItems.map(item => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'nav-item');
//         li.innerHTML = `
//             <a href="#${item.name}" class="nav-link">${item.name}</a>
//         `;
//         li.addEventListener('click', () => {
//             const navigationEvent = new CustomEvent('navigate', {
//                 detail: item.component
//             });
        
//             document.body.dispatchEvent(navigationEvent);
//         });

//         return li;
//     });


//     ul.append(...navElements);
//     div.append(ul)
//     return div
// }



export function NavElement(navItems){
    /// elemnty nav jako li
    const div = document.createElement('div'); 
    div.setAttribute('class', 'collapse navbar-collapse');
    div.setAttribute('id', 'navbarResponsive');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav text-uppercase ms-auto py-4 py-lg-0')
    const navElements = navItems.map(item => {
        const li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        li.innerHTML = `
            <a href="#${item.name}" class="nav-link">${item.name}</a>
        `;
        li.addEventListener('click', () => {
            const navigationEvent = new CustomEvent('navigate', {
                detail: item.component
            });
        
            document.body.dispatchEvent(navigationEvent);
        });

        return li;
    });


    ul.append(...navElements);
    div.append(ul)
    return div
}
