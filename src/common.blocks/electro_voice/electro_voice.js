const electro_voice = document.querySelector('.electro_voice')
const close_form_el = document.querySelector('.close_form_el')
const overlay = document.querySelector('.electro_overlay')

close_form_el.onclick = (e)=>{ 
    over_hide(electro_voice, overlay);
}

function over_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}

