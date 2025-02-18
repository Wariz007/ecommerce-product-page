const burgerBtn = document.querySelector('.header__menu__button');
const sidebar = document.querySelector('.sidebar');
const sidebarCancelBtn = document.querySelector('.sidebar__cancel__button');
const headerAndBody = document.querySelector('.header__and__body');
const overlay = document.querySelector('.overlay');


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