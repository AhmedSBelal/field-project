



window.onload = function() {
    fetch('../header.htm')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });
    
    // fetch('footer.html')
    //     .then(response => response.text())
    //     .then(html => {
    //         document.getElementById('footer').innerHTML = html;
    //     });
};

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(currentUser.userType == 'client') {

    const lawyer = document.querySelector('.lawyer');
    lawyer.classList.add('hidden');

} else {

    const clients = document.querySelectorAll('nav .client');
    clients.forEach((client)=>{
        client.classList.add('hidden');
    });

}

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

// click on the profile 

const profile = document.querySelector('nav .profile');
profile.addEventListener('click', function() {

    // check if sub-mene list have hidde or no to know remove it or show it 
    const subMenu = document.querySelector('nav .sub-menu-wrap');
    if (subMenu.classList.contains('hidden')) {
        subMenu.classList.remove('hidden');
    } else {
        subMenu.classList.add('hidden');
    }

});


// logout >> got to home and logout 

const logout = document.querySelector('.sub-menu .links .logout');

logout.addEventListener('click', (e)=>{
    const subMenu = document.querySelector('nav .sub-menu-wrap');
    subMenu.classList.add('hidden');
    currentUser.userName = "";
    currentUser.userType = 'noUser';
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = "index.htm";
})