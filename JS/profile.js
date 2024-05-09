

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
const toggleMenu = document.querySelector(".toggle-menu");
const ul = document.querySelector("nav ul");
const li = Array.from(document.querySelectorAll("nav ul li")); // array
if(screenWidth <= 800){
    updateScreenSize();
}

window.addEventListener('resize', function () {
    updateScreenSize();
});

toggleMenu.addEventListener("click", () => {
            // check if ul list have hidde or no to know remove it or show it 
            if(ul.classList.contains('hidden')){
               ul.classList.remove('hidden'); 
            }else{
                ul.classList.add('hidden');
            }
            ul.classList.add('mnScreen-ul');
            li.forEach((ele)=>{
                    ele.classList.add("mnScreen-li");
            });
});

function updateScreenSize() {

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    if (screenWidth <= 800) {
        ul.classList.add('hidden');
        ul.classList.remove('normal-ul');
    } else {
        ul.classList.remove('mnScreen-ul');
        ul.classList.remove('hidden');
        ul.classList.add('normal-ul');
        li.forEach((ele)=>{
            ele.classList.remove("mnScreen-li");
        });
    }

}