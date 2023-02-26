let navToggle= document.querySelector('.nav-toggle');
let nav= document.querySelector('.nav');

navToggle.addEventListener('click',()=>{
    nav.classList.toggle('nav--visible')
})