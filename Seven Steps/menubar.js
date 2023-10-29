let open_btn = document.querySelector(".open_btn")
let menu = document.querySelector(".menu")
let close_btn = document.querySelector(".close_btn")

open_btn.addEventListener("click", function(){
    menu.classList.add("show_menu")
})

close_btn.addEventListener("click", function(){
    menu.classList.remove("show_menu")
})