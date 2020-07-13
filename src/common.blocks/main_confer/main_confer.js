const call_btn = document.querySelector('#call_btn')
const callback_form = document.querySelector('.callback_form')
const overlay = document.querySelector('.popup-overlay')

call_btn.addEventListener('click', (e)=>{
    show_hide(callback_form, overlay);
    close_doc_click(callback_form, overlay);
})


function show_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}

function close_doc_click(form, over){
    over.onclick = (e)=>{ 
        if(!e.target.classList.contains('callback_form') && !e.target.parentNode.classList.contains('callback_form')){
            show_hide(form, over)
        }
    }
}