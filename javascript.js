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


menuBtn.addEventListener("click",sideMenu);

crossIcon.addEventListener("click",sideMenu);


// Header hide

const header=document.getElementById("nav-header");
const navbar=document.getElementById("navbar");

let hideHeaderStatus=false;
function hideHeader(){
    if(!hideHeaderStatus){
        header.style.display="none";
        navbar.style.backgroundColor="#484444d9";
        hideHeaderStatus=true;
        }
        
           else{
            header.style.display="flex";
              hideHeaderStatus=false;
              navbar.style.backgroundColor="transparent";
        }
}

// window.addEventListener("keydown",hideHeader);
