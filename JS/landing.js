
function wrapperPopup() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');


    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active');
        wrapper.classList.remove('active-popup');
    });
}

wrapperPopup();

let admins = ['ahmed', 'ali'];
let clints = ['mohamed'];
let lawyers = ['abdo'];
let currentUser = "";

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Process login data here
        console.log('Login:', email, password);
        // check if is it register or not


        // Optionally, reset form fields
        // loginForm.reset();
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email-register').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password-register').value;
        const address = document.getElementById('address').value;
        const role = document.querySelector('.role input[name="role"]:checked').value;
        // Process registration data here
        console.log('Registration:', username, email, mobile, password, address, role);
        // Optionally, reset form fields
        // registerForm.reset();
    });
});

const paymentNav = document.querySelector('nav .payment-nav');
const chatNav = document.querySelector('nav .chat-nav');
const calendarNav = document.querySelector('nav .calendar-nav');
const dashboardNav = document.querySelector('nav .dashboard-nav');
const aboutNav = document.querySelector('nav .about-nav');
const servicesNav = document.querySelector('nav .services-nav');
const contactNav = document.querySelector('nav .contact-nav');

// console.log(paymentNav, chatNav, calendarNav, dashboardNav);

if (currentUser == "") {

    // then no user
    paymentNav.classList.add('hidden');
    chatNav.classList.add('hidden');
    calendarNav.classList.add('hidden');
    dashboardNav.classList.add('hidden');

} else if (currentUser === 'ahmed') {

    // then admin
    paymentNav.classList.add('hidden');
    aboutNav.classList.add('hidden');
    servicesNav.classList.add('hidden');
    contactNav.classList.add('hidden');

} else if (currentUser == 'mohamed') {

    // then lawyer

} else {

    // then clint

}

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

if(screenWidth <= 800){
    updateScreenSize();
}

window.addEventListener('resize', function () {
    updateScreenSize();
});

function updateScreenSize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;


    const toggleMenu = document.querySelector(".toggle-menu");
    const ul = document.querySelector("nav ul");
    const li = Array.from(document.querySelectorAll("nav ul li")); // array
    if (screenWidth <= 800) {

        ul.classList.add('hidden');
        ul.classList.remove('normal-ul');

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

    } else {

        ul.classList.remove('mnScreen-ul');
        ul.classList.remove('hidden');
        ul.classList.add('normal-ul');
        li.forEach((ele)=>{
            ele.classList.remove("mnScreen-li");
        });

    }

}








