const burgerBtn = document.querySelector('.header__menu__button');
const sidebar = document.querySelector('.sidebar');
const sidebarCancelBtn = document.querySelector('.sidebar__cancel__button');
const headerAndBody = document.querySelector('.header__and__body');
const overlay = document.querySelector('.overlay');

const minusBtn = document.querySelector('.body__minus__sign');
const plusBtn = document.querySelector('.body__plus__sign');
let counterDisplay = document.querySelector('.body__count');
const cartCounterDisplay = document.querySelector('.header__cart__counter');

const checkoutBasket = document.querySelector('.body__cart__basket');
const checkoutBtn = document.querySelector('.body__add_to_cart_container');

//activate burger button
burgerBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
})

//activate sidebar cancel btn
sidebarCancelBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
})

let counter = Number(counterDisplay.textContent) || 0;
let cartCounter = Number(cartCounterDisplay.textContent) || 0;
//activate minus and plus btns
minusBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = 0;
    }
    counterDisplay.textContent = counter;
    cartCounterDisplay.style.display = 'block';
    cartCounter--;
    cartCounterDisplay.textContent = cartCounter;
})
plusBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    cartCounterDisplay.style.display = 'block'
    cartCounter++
    cartCounterDisplay.textContent = cartCounter;
})

checkoutBtn.addEventListener('click', () => {
    checkoutBasket.style.display = 'block';
})