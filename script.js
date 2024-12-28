'use strict'

const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")
const menu = document.querySelector(".responsive-links")

openBtn.addEventListener('click', function(){
    openBtn.style.display = 'none'
    closeBtn.style.display = 'flex'
    closeBtn.style.backgroundColor = "green"
    menu.style.display = 'flex'
})
closeBtn.addEventListener('click', function(){
    openBtn.style.display = 'flex'
    closeBtn.style.display = 'none'
    closeBtn.style.backgroundColor = "none"
    menu.style.display = 'none'
})