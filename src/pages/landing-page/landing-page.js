import '../../common.blocks/header/header.js'
import '../../common.blocks/benefit_slider/benefit_slider.js'
import '../../main.less'
import './landing-page.less'
import '../../common.blocks/callback_form/callback_form.js'
import '../../common.blocks/request_send/request_send.js'
import '../../common.blocks/confer_dinamics/confer_dinamics.js'
import '../../common.blocks/body_confer_slider/body_confer_slider.js'

const confer_room = document.querySelector('.confer_room')

if (document.documentElement.clientWidth <= 400){
    confer_room.src='../../img/high-conf-room.jpg'
}