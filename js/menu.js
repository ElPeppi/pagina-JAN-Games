const bt_menu = document.querySelector('.bt_menu');
const menu = document.querySelector('.menu-navegacion');

console.log(bt_menu);
console.log(menu);

bt_menu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != bt_menu){

        menu.classList.toggle("spread")
    }
})