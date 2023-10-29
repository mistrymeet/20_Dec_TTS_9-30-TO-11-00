let icon = document.querySelector(".bxs-moon");
icon.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode") == true){
        icon.classList.remove("bxs-moon")
        icon.classList.add("bxs-sun")
    }else{
        icon.classList.remove("bxs-sun")
        icon.classList.add("bxs-moon")
    }
})