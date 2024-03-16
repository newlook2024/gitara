let openBtn = document.querySelector('.open-btn')
let resMenu = document.querySelector('.responsive-menu')
let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', function(){
    resMenu.style.left = '0'
})

closeBtn.addEventListener('click', function(){
    resMenu.style.left = '100%'
})
