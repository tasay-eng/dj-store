const dinamic = document.querySelector('.active_1')
const electro_voice = document.querySelector('.electro_voice')
const overlay = document.querySelector('.electro_overlay')

dinamic.addEventListener('click', (e)=>{
    over_hide(electro_voice, overlay);
    close_doc_click(electro_voice, overlay);
})


function over_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}


function close_doc_click(form, over){
    over.onclick = (e)=>{ 
        if(e.target.classList.contains('electro_overlay')){
            over_hide(form, over);
        }
    }
}