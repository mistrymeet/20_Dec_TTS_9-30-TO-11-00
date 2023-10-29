function changebg(){
    let scroll = document.querySelector(".header")
    let current = window.scrollY 

    if(current > 0){
        scroll.classList.add("display")
    }else{
        scroll.classList.remove("display")
    }
}
window.addEventListener("scroll", changebg)