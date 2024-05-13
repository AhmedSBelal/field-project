

// take current user form the local storage

let currentUser = {
    userName: "",
    userType: "noUser", 
};

// put current user in local storage 
if(window.localStorage['currentUser']){ 
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

// sub menue
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

///       update screen size
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
const toggleMenu = document.querySelector(".toggle-menu");
const li = Array.from(document.querySelectorAll("nav ul li")); // array

if (screenWidth <= 800) {
    updateScreenSize();
}

    let links = document.querySelectorAll('nav ul li');
    const ul = document.querySelector("nav ul");


    window.addEventListener('resize', function () {
        updateScreenSize();
    });
    
    toggleMenu.addEventListener("click", () => {
        // check if ul list have hidde or no to know remove it or show it 
        const ul = document.querySelector("nav ul");
        if (ul.classList.contains('hidden')) {
            ul.classList.remove('hidden');
        } else {
            ul.classList.add('hidden');
        }
        ul.classList.add('mnScreen-ul-profile')
        li.forEach((ele) => {
            ele.classList.add("mnScreen-li");
        });
    });

    function updateScreenSize() {

        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        const ul = document.querySelector("nav ul");
        if (screenWidth <= 800) {
            ul.classList.add('hidden');
            ul.classList.remove('normal-ul');
        } else {
    
            ul.classList.remove('mnScreen-ul');
            ul.classList.remove('hidden');
            ul.classList.add('normal-ul');
            ul.classList.remove('mnScreen-ul-profile');
            li.forEach((ele) => {
                ele.classList.remove("mnScreen-li");
            });
    
        }
    
    }
    
//  take data 

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const method = document.getElementById('method').value;
    const amount = document.getElementById('amount').value;
    const creditNumber = document.getElementById('creditNumber').vlaue;

    // check valid 
    let validE = false;

    // check email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorEmail = document.querySelector('.error.email');
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove('hidden');
    } else if (!errorEmail.classList.contains('hidden')) {
        errorEmail.classList.add('hidden');
        validE = true;
    } else {
        validE = true;
    }

    // reset form fields
    if (validE) {
        form.reset();
        // send data to DB and show accept
        const accept = document.querySelector('.Success');
        accept.classList.remove('hidden');
        setTimeout(() => {
            accept.classList.add('hidden');
        }, 2000);
    }
   

});
