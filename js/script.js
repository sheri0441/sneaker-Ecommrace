const basket = document.querySelector('.cart_box');
const menu = document.querySelector('.nav_menu');
const navBG = document.querySelector('.nav_bg');
const navBox = document.querySelector('.nav_box');
const cart = document.querySelector('.cart_icon');
const cross = document.querySelector('.close');
const del = document.querySelectorAll('.delete_icon');
const body = document.querySelector('body');
const cartBtn = document.querySelector('.addBtn')
const minis = document.querySelector('.sub')
const add = document.querySelector('.add')
const quantity = document.querySelector('.item_quantity')
const cartList = document.querySelector('.cart_list')
const next = document.querySelector('.next');
const pervious = document.querySelector('.previous');
const productPic = document.querySelectorAll('.children');
const tumbnail = document.querySelectorAll('.tumbnail_Btn');
const cart_num = document.querySelector('.cart_item_count');
const productBg =document.querySelector('.nav_bg-main');
const productTumbnail = document.querySelector('.product-container')


const check = () => {
    productBg.style.display = 'block';
    productTumbnail.classList.add('toggle_property')
}

const removeProduct = () => {
    productBg.style.display = 'none'
    productTumbnail.classList.remove('toggle_property')
}

productBg.addEventListener('click', removeProduct);

tumbnail.forEach(item => item.addEventListener('click', check));

const hideCart = () => {
    basket.style.display = "none"
}

const logIt = () => {
    console.log('working');
    document.body.removeEventListener('click', logIt)
}

const showCart = () => {
    basket.style.display = "flex";
    document.body.addEventListener('click', logIt)
}

const toggleCart = () => {
    if( basket.style.display === "none"){
        showCart()
    } else {
        hideCart()
    }
    
}
const navCheck = () => {
    if(window.innerWidth > 1000){
        if (navBox.style.display === "none"){
            navBox.style.display = "flex";
            navBG.style.display = "none";
        } 
        if ( navBG.style.display === "block") {
            navBG.style.display = "none"
        }
    }
    if(window.innerWidth < 1000){
        if (navBox.style.display === "flex"){
            if(navBG.style.display === "none"){
                navBG.style.display = "block"
            }
        }
    }
    
}


const toggleNav = () => {
    if (navBox.style.display === "none"){
        navBox.style.display = "flex";
        navBG.style.display = "block";
        body.classList.add('disable_scroll');
    } else {
        navBox.style.display = "none";
        navBG.style.display = "none";
        body.classList.remove('disable_scroll');
    }
}



let item = quantity.innerHTML;

const addItem = () => {
    item++;
    quantity.textContent = item
}
const minisItem = () => {
    if( item > 0) {
        item--;
        quantity.textContent = item
    }
}

const addCartItem = () => {
    
    if (quantity.innerHTML > 0) {

        const cartItem = document.createElement('div');
        cartList.appendChild(cartItem);
        cartItem.classList.add('cart_list-item');


        const node = document.createElement('div');
        cartItem.appendChild(node);
        node.classList.add('first');
        const item_pic = document.createElement('img');

        node.appendChild(item_pic);
        item_pic.classList.add('item_tumbnail');
        const main_tumbnail = document.querySelector('.main_tumbnail');
        item_pic.src=main_tumbnail.src;
        const middelDiv = document.createElement('div');
        node.appendChild(middelDiv);
        middelDiv.classList.add('item_detail');
        const nameOfItem = document.createElement('p')
        middelDiv.appendChild(nameOfItem);
        const name = document.querySelector('h1')
        nameOfItem.classList.add('nameOfItem');
        nameOfItem.innerText=name.innerHTML
    
        const priceDiv = document.createElement('div')
        middelDiv.appendChild(priceDiv);
        priceDiv.classList.add('item_price');
        const item_price = document.querySelector('.price')
        const price = document.createElement('p')
        priceDiv.appendChild(price);
        price.classList.add('single_price');
        price.textContent='$' + item_price.innerHTML;
        const cross = document.createElement('p');
        priceDiv.appendChild(cross);
        cross.classList.add('multiple');
        cross.textContent= "x";
        const itemQuantity = document.createElement('p');
        priceDiv.appendChild(itemQuantity);
        itemQuantity.classList.add('quantity');
        itemQuantity.textContent=quantity.innerHTML;
        const totalPrice = document.createElement('p');
        priceDiv.appendChild(totalPrice);
        totalPrice.classList.add('total');
        cart_num.textContent = Number(cart_num.innerHTML) + Number(itemQuantity.textContent);
        totalPrice.textContent = '$' + item_price.innerHTML * itemQuantity.textContent;
        
        const deleteBtn = document.createElement('img');
        cartItem.appendChild(deleteBtn);
        deleteBtn.classList.add('delete_icon')
        deleteBtn.src= '/images/icon-delete.svg';

        if (cart_num.parentElement.style.display= 'none' && cart_num.textContent > '0') {
            cart_num.parentElement.style.display= 'block';
        }
        
        const deleteItem = () => {
            cartList.removeChild(cartItem);
            cart_num.textContent = Number(cart_num.innerHTML) - Number(itemQuantity.textContent);
            if(cart_num.textContent === '0'){
                cart_num.parentElement.style.display= 'none';
            }
        }

        deleteBtn.addEventListener('click', deleteItem);

        item = 0;
        quantity.innerHTML = 0;
    }
}


const nextPic = () => {
    if (!(productPic[0].classList.contains('hidden'))){
        productPic[0].classList.add('hidden');
        productPic[1].classList.remove('hidden');
    } else if (!(productPic[1].classList.contains('hidden'))){
        productPic[1].classList.add('hidden');
        productPic[2].classList.remove('hidden');
    } else if (!(productPic[2].classList.contains('hidden'))){
        productPic[2].classList.add('hidden');
        productPic[3].classList.remove('hidden');
    } else if (!(productPic[3].classList.contains('hidden'))){
        productPic[3].classList.add('hidden');
        productPic[0].classList.remove('hidden');
    }
    
}

const perviousPic = ()=> {
    if (!(productPic[0].classList.contains('hidden'))){
        productPic[0].classList.add('hidden');
        productPic[3].classList.remove('hidden');
    } else if (!(productPic[1].classList.contains('hidden'))){
        productPic[1].classList.add('hidden');
        productPic[0].classList.remove('hidden');
    } else if (!(productPic[2].classList.contains('hidden'))){
        productPic[2].classList.add('hidden');
        productPic[1].classList.remove('hidden');
    } else if (!(productPic[3].classList.contains('hidden'))){
        productPic[3].classList.add('hidden');
        productPic[2].classList.remove('hidden');
    }
}


const checkCart = () => {
    if(basket.style.display === "flex"){
        basket.style.display = "none"
    }
}


cart.addEventListener('click', toggleCart);
menu.addEventListener('click', toggleNav)
cross.addEventListener('click', toggleNav)
window.addEventListener("resize", navCheck)
cartBtn.addEventListener('click', addCartItem)
add.addEventListener('click', addItem);
minis.addEventListener('click', minisItem)
next.addEventListener('click', nextPic);
pervious.addEventListener('click', perviousPic);
