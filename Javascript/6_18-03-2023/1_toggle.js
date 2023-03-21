let disp_btn = document.querySelector(".disp_btn");
let nav = document.querySelector(".nav");
let close_btn = document.querySelector(".close_btn")

disp_btn.addEventListener("click", function(){
    nav.classList.add("show_menu")
})

close_btn.addEventListener("click", function(){
    nav.classList.remove("show_menu")
})