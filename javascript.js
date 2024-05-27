// const home_section =document.getElementById("home");
// const load_page=document.getElementById("load-page");
// function loaded(){
// // load_page.style.display="none";
// home_section.classList.add("loaded");
// home_section.style.display="block";
// }
// setTimeout(loaded,2000);



// Menu effect

const menuBtn=document.getElementById("menu");
const sideBar= document.getElementById("side-bar");
let menuStatus=false;
let crossIcon=document.getElementById("cross-mark");

function sideMenu(){

    if(!menuStatus){
        sideBar.style.display="flex";
        menuStatus=true;
        console.log("hello in flex");
    }

    else{
        sideBar.style.display="none";       
        menuStatus=false;
        console.log("Bye in jail");
    }
        
}


// menuBtn.addEventListener("click",sideMenu);

// crossIcon.addEventListener("click",sideMenu);

// Header hide
const header=document.getElementById("contact-info");
const navbar=document.getElementById("navigation-header");
let screen = window.matchMedia("(width <= 800px)");
let lastscrollPosition=0;
function hideHeader(){

    let isScrollBottom=lastscrollPosition < window.scrollY;
    if(isScrollBottom){
        header.style.display="none";
        }
           else{
if(screen.matches){
    header.style.display="none";
}
else{
    header.style.display="flex";
}        
  }
  lastscrollPosition=window.scrollY;
}
 window.addEventListener("scroll",()=>{
if(window.scrollY>=40){
    navbar.style.backgroundColor="#484444d9";
    navbar.style.paddingTop="0rem";
    hideHeader();
}
else{
    navbar.style.backgroundColor="transparent";
    if(screen.matches){
        navbar.style.paddingTop="0rem";
    }
    else{
        navbar.style.paddingTop="3rem";
    }
}
 });
