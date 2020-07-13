import '../small.blocks/button/button.js'
import '../small.blocks/input/input.js'

const send_btn = document.querySelector('#send_btn')
const request_send = document.querySelector('.request_send')
const callback_form = document.querySelector('.callback_form')
const close_form_call = document.querySelector('.close_form_call')
const overlay = document.querySelector('.popup-overlay')

send_btn.addEventListener('click', (e)=>{
    form_hide(callback_form, request_send);
})

close_form_call.onclick = (e)=>{ 
    over_hide(callback_form, overlay);
}
 

function form_hide(form, form_2){
    form.classList.toggle('show_form')
    form_2.classList.toggle('show_form')
}

function over_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}
