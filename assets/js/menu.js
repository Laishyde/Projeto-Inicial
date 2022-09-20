const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', () =>{
    headerMenu.classList.toggle('mobile-menu');
});

