let burger = document.getElementById('btn-burger');
let menu = document.getElementById('head');
let mainContent = document.querySelector('.main'); 
let body = document.body;
burger.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    mainContent.classList.toggle('blur-effect'); 
    body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
})