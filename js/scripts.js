const burger        = document.querySelector('#burger');
const menu          = document.querySelector('#menu')
const home_li       = document.getElementById('home_li');
const products_li   = document.getElementById('products_li');
const contacts_li   = document.getElementById('contacts_li');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});


function active_products(){
    contacts_li.classList.remove('active_item');
    home_li.classList.remove('active_item');
    products_li.classList.add('active_item');
    
}

function active_home(){
    contacts_li.classList.remove('active_item');
    products_li.classList.remove('active_item');
    home_li.classList.add('active_item');
    
}

function active_contacts(){
    home_li.classList.remove('active_item');
    products_li.classList.remove('active_item');
    contacts_li.classList.add('active_item');
}