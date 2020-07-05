const dinamics = document.querySelectorAll('.active_round')
const electro_voice = document.querySelectorAll('.electro_voice')
const close_form = document.querySelectorAll('.close_form')
console.log(electro_voice)
dinamics.forEach((elem, i)=>{
    elem.addEventListener('click', (e)=>{
        form_close_open(electro_voice[i], elem)
        close_form[i].onclick = (e)=>{
            form_close_open(electro_voice[i], elem)
        }
    })
});

function form_close_open(form, round){
    round.classList.toggle('add_hover')
    form.classList.toggle('show_form')
}