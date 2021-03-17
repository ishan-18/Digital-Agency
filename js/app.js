const toggle1 = document.querySelector(".toggle-btn")
const nav1 = document.querySelector(".navigation-links")

toggle1.addEventListener('click', ()=>{
    toggle1.classList.toggle('active') 
    nav1.classList.toggle('active')
})
