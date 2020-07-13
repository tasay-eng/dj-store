function form_show_hide(btn, form, elem_1, class_1, class_2){
    btn.addEventListener('click', (e)=>{
        show_hide(form, elem_1);
        form.firstChild.onclick = (e)=>{ 
            show_hide(form, elem_1)
        }
    })
}

function show_hide(form, elem_1, class_1, class_2){
    form.classList.toggle(class_1)
    elem_1.classList.toggle(class_2)

}

