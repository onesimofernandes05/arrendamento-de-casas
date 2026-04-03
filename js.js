const btnBars=document.querySelector("#btn-bars");
const ul=document.querySelector("#list-links");

btnBars.addEventListener("click",()=>{
    if(ul.classList.contains("hide-links")){
        ul.classList.remove("hide-links");
        btnBars.children[0].classList.remove("fa-bars");
        btnBars.children[0].classList.add("fa-close");
    }else{
        ul.classList.add("hide-links");
        btnBars.children[0].classList.remove("fa-close");
        btnBars.children[0].classList.add("fa-bars");
    }
});