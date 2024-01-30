const menu = document.querySelector("nav");

document.querySelector("#trigger-menu").addEventListener('click', trigger)

let count = 0;

function trigger(){
    count++;
    if (count%2 == 0) {
        menu.style.display ="none";
        
    }else{
        menu.style.display ="block";
        
    }
    
}