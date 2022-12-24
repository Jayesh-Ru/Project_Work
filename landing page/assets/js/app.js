//scroll-to-top selection
const scrollUp=document.getElementById("scroll-up");
//scroll-to-top functionality
scrollUp.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

//theme-switcher selection
const checkbox=document.querySelector("#checkbox");

//theme-switcher functionality
checkbox.addEventListener("change",()=>{
    document.body.classList.toggle("dark");
});

//selection for hamburger menu
const ham=document.querySelector("#hamburger");
const menu=document.querySelector(ul);

//hamburger menu functionality

function openMenu(){
    ham.classList.toggle("ative");
    menu.classList.toggle("ative");

}
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}