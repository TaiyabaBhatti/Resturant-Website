// const home_section =document.getElementById("home");
// const load_page=document.getElementById("load-page");
// function loaded(){
// // load_page.style.display="none";
// home_section.classList.add("loaded");
// home_section.style.display="block";
// }
// setTimeout(loaded,2000);

// Menu effect
AOS.init();
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

// Slider Image


const previous=document.querySelector("#previous");
const next=document.querySelector("#next");
const sliderItems=document.querySelectorAll("#preface .preface-content");
const sliderImg=document.querySelectorAll(".slider-bg");
let position=0;
let lastActiveSlider=sliderItems[0];
let lastActiveImg=sliderImg[0];

let updateSlider= function(){
    

    lastActiveSlider.classList.remove("active");
    sliderItems[position].classList.add("active");  
    lastActiveSlider=sliderItems[position];

     lastActiveImg.classList.remove("activeimg");
    sliderImg[position].classList.add("activeimg");
    lastActiveImg=sliderImg[position];
}

let slideNext=function(){
    position++;
    if(position >= sliderItems.length-1){
        position=0;
    }
    
updateSlider();

}

next.addEventListener("click",slideNext);

let slidePrevious=function(){
 
    if(position <= 0){
        position = sliderItems.length-1;
    }
    position--;
    console.log(sliderItems[position]);
   
updateSlider();
}
previous.addEventListener("click",slidePrevious);

let autoSlide;
let autoSlider=function(){
    autoSlide=setInterval(slideNext,4000);
}


function analyzer(){
    if(window.innerWidth<=500){
        next.style.display="none";
        previous.style.display="none";  
        autoSlider();
    }
    else{
        next.style.display="block";
        previous.style.display="block";
        clearTimeout(autoSlide);
    }
}


window.addEventListener("resize",analyzer);
window.addEventListener("load",analyzer);








