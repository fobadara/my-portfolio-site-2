const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list-cont');
const body = document.querySelector('body');
const closeModal = document.querySelector('.close-modal');
hamburger.addEventListener('click', openMenu);
closeModal.addEventListener('click', closeMenu);
// let sections= queryselector
function openMenu() {
    if (menu.classList.toggle("hamburger-toggle", true)) {
        body.style.overflow = "hidden";
    }
}
function closeMenu() {
    menu.classList.remove("hamburger-toggle");
}

const navList = document.querySelectorAll('.nav-list');
for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', closeMenu);
} 

