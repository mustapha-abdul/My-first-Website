/* ======================================================= toggler style switcher ================================== */
const styleSwitcherToggler = document.querySelector("style-switcher-toggle");
styleSwitcherToggler.addEventListener("click", () =>{
  document.querySelector(".style-switcher").classList.toggle("open");
})
// hide switcher on scroll
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher"),classList.remove("open");
    }
})
/*===================================== theme color ======================================== */
const alternateStyle = document. querySelector(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach(style) => {
     if(color===style.getAttribute("title")){
        style.removeAttribute("disabled");
     }  
     else{
         style.setAttribute("disabled","true");
     } 
    }
}