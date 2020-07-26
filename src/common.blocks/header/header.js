import '../small.blocks/button/button.js'

const header_menu = document.querySelector('.header_menu')
const menu_image = document.querySelector('.menu_image')
const close_header = document.querySelector('.close_header')
const wrapper_main = document.querySelector('.wrapper-main')

menu_image.addEventListener('click', (e)=>{
    header_menu.classList.toggle('show_menu')
    menu_image.classList.toggle('hide_img')
    close_header.classList.toggle('show_menu')
    wrapper_main.classList.toggle('hide_main')
})

close_header.addEventListener('click', (e)=>{
    header_menu.classList.toggle('show_menu')
    menu_image.classList.toggle('hide_img')
    close_header.classList.toggle('show_menu')
    wrapper_main.classList.toggle('hide_main')
})