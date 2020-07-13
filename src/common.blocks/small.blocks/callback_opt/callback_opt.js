const tube_call = document.querySelector('.tube_call')
const callback_link = document.querySelector('.callback_link')
const overlay = document.querySelector('.popup-overlay')
const callback_form = document.querySelector('.callback_form')

callback_link.addEventListener('click', (e)=>{
    show_hide(callback_form, overlay);
})

tube_call.addEventListener('click', (e)=>{
    show_hide(callback_form, overlay);
})

function show_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}