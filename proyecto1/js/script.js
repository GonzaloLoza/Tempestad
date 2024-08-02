const card = document.querySelector('.card');
const body = document.querySelector('body');

card.addEventListener("mouseenter",(e)=>{
    body.style.backdropFilter='blur(0px)';
})
card.addEventListener("mouseleave", (e)=>{
    body.style.backdropFilter='blur(6px)';
})