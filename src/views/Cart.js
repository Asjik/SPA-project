    // Cart.js

    import { cartManager } from '../cart/cartManager';
    import { NavButton } from '../common/NavButton';

    export function Cart() {

    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'cart');
    const cartWrap = document.createElement('ul');
    cartWrap.setAttribute('class', 'cartWrap');


    const items = cartManager.getAllItems().map(item => {
    const li = document.createElement('li');
    li.setAttribute("class", "items even")
    li.innerHTML = `
    <div class="infoWrap"> 
        <div class="cartSection">
            <img src="${item.photo}" alt="" class="itemImg" />
            <p class="itemNumber">#${item.id}</p>
            <h3>${item.name}</h3>
            
            <p> <input type="text"  class="qty" placeholder="${item.quantity}"/> x ${item.price}</p>
            
            <p class="stockStatus"> In Stock</p>
        </div>  
        <div class="prodTotal cartSection">
            <p>${item.price * item.quantity}</p>
        </div>
        
        <div class="cartSection removeWrap"></div>
    </div>
    `;
    const removeWrap =  [...li.getElementsByClassName("cartSection removeWrap")];
    const removeItemButton = NavButton('🗑️', () => {
        cartManager.removeItem(item);
        return Cart();
    }); 
    removeItemButton.setAttribute('class', 'remove')
    removeWrap.forEach(element => {
        element.append(removeItemButton);
    })
    //li.lastElementChild.append(removeItemButton);

    return li;
    });
    
    if (items.length === 0){
        divCard.innerHTML=`
        <i class="basket-icon fas fa-shopping-basket" aria-hidden="true"></i>
        <p class="emptySection">Twój koszyk jest pusty</p>
        `

    }
    cartWrap.append(...items);
    divCard.append(cartWrap);

/// sum up
    const subtotal = document.createElement('div');
    subtotal.setAttribute('class', 'subtotal');
    const ulTotal = document.createElement('ul');
    ulTotal.innerHTML=`
    <li class="totalRow"><span class="label">Kwota do zapłaty</span><span class="value">${cartManager.getTotalPrice()} PLN</span></li>
`;
    subtotal.append(ulTotal)
    divCard.append(subtotal);

    return divCard;
    }
