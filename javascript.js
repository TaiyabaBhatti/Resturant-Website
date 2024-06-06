
document.addEventListener("DOMContentLoaded",()=>{

AOS.init();

const home_section =document.getElementById("load-page");
const load_page=document.getElementById("preLoad");
function loaded(){

load_page.classList.add("loaded");
// load_page.style.display="none";
home_section.style.display="block";

}
 setTimeout(loaded,3000);





// Menu effect


const home=document.getElementById("Home");
const menuBtn=document.getElementById("menu-bars");
const sideBar= document.getElementById("side-menu");
let menuStatus=false;
let crossIcon=document.getElementById("cross");
function sideMenu(){
    if(!menuStatus){
        sideBar.classList.add("show");
        menuStatus=true;
    }

    else{
        
        sideBar.classList.remove("show");  
        menuStatus=false;
    }
        
}

menuBtn.addEventListener("click",sideMenu);
crossIcon.addEventListener("click",sideMenu);


// Header hide
const arrowUp=document.getElementById("look-up");
const header=document.getElementById("contact-info");
const navbar=document.getElementById("navigation-header");
let screen = window.matchMedia("(width <= 800px)");
let lastscrollPosition=0;
function hideHeader(){
    let isScrollBottom=lastscrollPosition < window.scrollY;
    if(isScrollBottom){
        header.style.display="none";
        // arrowUp.style.display="block";
        }
           else{
if(screen.matches){
    header.style.display="none";
}
else{
    header.style.display="flex";
    // arrowUp.style.display="none";
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



window.addEventListener("scroll",()=>{
    if(window.scrollY>=1000){
        arrowUp.style.display="block";
    }
else{
    arrowUp.style.display="none";
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

function autoSlider() {
    autoSlide = setInterval(slideNext, 7000);
}

function handleResize() {
    if (window.innerWidth <= 500) {
        if (!autoSlide){
            autoSlider();  // Start auto slider if not already running
        }
    } else {
        clearInterval(autoSlide);  // Clear the interval to stop auto slider
        autoSlide = null;  // Reset the autoSlide variable
    }
}

// Initial check on page load
handleResize();
// Add event listener to handle window resize
window.addEventListener('resize', handleResize);

function analyzer(){
    if(window.innerWidth<=500){
        next.style.display="none";
        previous.style.display="none";  
        // autoSlider();
    }
    else{
        next.style.display="block";
        previous.style.display="block";
        // clearTimeout(autoSlide);
    }
}
analyzer();
window.addEventListener("resize",analyzer);

const imgCard = document.querySelector("#about .img-card");

const targetBlock=document.querySelector("#about");

const aboutBanner=document.querySelector("#about-banner");

targetBlock.addEventListener('mousemove', (e) => {
    const rect = targetBlock.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.left;

    // Calculate the horizontal or vertical movement range
    const maxMovement = 5;
    
     // Maximum pixels the image will move left or right

    // Calculate the offset based on the mouse position
    const offsetX = (mouseX / rect.width) * 2 - 1; // -1 to 1
    const offsetY = (mouseY / rect.width) * 2 - 1; // -1 to 1

    const moveX = offsetX * maxMovement;
    const moveY = offsetY * maxMovement;
    // Apply the transform to the image
    aboutBanner.style.transform = `translate(${moveX}px,${moveY}px)`;
    imgCard.style.transform = `translate(${moveX}px,${moveY}px)`;
});


targetBlock.addEventListener('mouseleave', () => {
    // Reset the image position when the mouse leaves the container
    aboutBanner.style.transform = 'translate(0,0)';
    imgCard.style.transform = 'translate(0,0)';
});

});

const calender=document.getElementById("calender");
const selectedDate=document.getElementById("selected-date");

calender.addEventListener("change",()=>{

let dateValue=calender.value;
selectedDate.textContent=`${dateValue}`;



});









