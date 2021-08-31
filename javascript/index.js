const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list-cont');
const body = document.querySelector('body');
const closeModal = document.querySelector('.close-modal');
const navList = document.querySelectorAll('.nav-list');

function openMenu() {
  if (menu.classList.toggle('hamburger-toggle', true)) {
    body.style.overflow = 'hidden';
  }
}
hamburger.addEventListener('click', openMenu);

function closeMenu() {
  menu.classList.toggle('hamburger-toggle', false);
  body.style.overflow = 'visible';
}
closeModal.addEventListener('click', closeMenu);

for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', closeMenu);
}
