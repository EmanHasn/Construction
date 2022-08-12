let loader = document.querySelector("#preloader");
function myFunction(){
   setTimeout(()=>{
    loader.style.opacity = 0;
    loader.style.height = '0';
   }, 2100)
}
myFunction();


let up = document.querySelector("#up");
window.onscroll = function(){
    this.screenY >= 1500 ? up.classList.add("show") : up.classList.remove("show"); 
}
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};