const request_send = document.querySelector('.request_send')
const accept_btn = document.querySelector('#accept_btn')
const close_form_req = document.querySelector('.close_form_req')
const overlay = document.querySelector('.popup-overlay')

accept_btn.onclick = (e)=>{ 
    show_hide(request_send, overlay)
}

close_form_req.onclick = (e)=>{ 
    show_hide(request_send, overlay)
}


function show_hide(form, over){
    form.classList.toggle('show_form')
    over.classList.toggle('show_overlay')
}
