const nav=document.querySelector(".nav-links");
const openMenu=document.querySelector("#menu-img")
const closeMenu=document.querySelector("#menu-close");

openMenu.addEventListener("click",()=>{
  nav.style.display="flex";
})
closeMenu.addEventListener("click",()=>{
  nav.style.display="none";
})
