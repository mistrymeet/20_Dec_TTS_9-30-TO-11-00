function changbg(){
    let header = document.querySelector(".header")
    let current = window.scrollY
    if(current > 0){
        header.classList.add("header_fix")
    }else{
        header.classList.remove("header_fix")
    }
}
window.addEventListener("scroll", changbg)