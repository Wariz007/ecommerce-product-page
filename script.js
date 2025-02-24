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

const checkoutBtn2 = document.querySelector('.body__cart__basket__button');
const cartBasketDetails = document.querySelector('.basket__details__and__button');
const cartBasketDetail2 = document.querySelector('.basket__detail__two');

const numberOfItems = document.querySelector('.number__of__item');
const basketTotalPrice = document.querySelector('.basket__total__price');

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
function getfollowCount() {
    return counter;
}
//activate minus and plus btns
minusBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = 0;
    }
    counterDisplay.textContent = counter;
    if(cartCounter > 0){
        cartCounter--;
    }
    cartCounterDisplay.textContent = cartCounter;
    cartCounterDisplay.style.display = 'block';
})
plusBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    cartCounterDisplay.style.display = 'block'
    cartCounter++
    cartCounterDisplay.textContent = cartCounter;
})

checkoutBtn.addEventListener('click', () => {
    checkoutBasket.classList.toggle('show');
    let followCount = getfollowCount();

    if(getfollowCount() === 0) {
        cartBasketDetails.style.display = 'none';
        cartBasketDetail2.style.display = 'block';
    } else {
        cartBasketDetails.style.display = 'block';
        cartBasketDetail2.style.display = 'none';
    }

    numberOfItems.textContent = `${followCount}`;
    basketTotalPrice.textContent = `$${followCount * 125}`;
})