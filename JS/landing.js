
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

function checkTypeUser(currentUser) {

    let links = document.querySelectorAll('nav ul li');

    links.forEach((ele)=>{
        ele.classList.add('hidden');
    });

    if(currentUser == 'ahmadsd777777@gmail.com') {
            // then admin

            links.forEach((ele)=>{
                if(ele.classList.contains('admin') || ele.classList.contains('all-users')) ele.classList.remove('hidden');
            });

    }else if  (currentUser == 'ahmadsd77777@gmail.com'){
            // then lawyer
            
            links.forEach((ele)=>{
                if(ele.classList.contains('lawyer') || ele.classList.contains('all-users') || ele.classList.contains('two-users')) 
                    ele.classList.remove('hidden');
            });

    }else if(currentUser == 'ahmadsd88888@gmail.com') {
    
            // then clint
            links.forEach((ele)=>{
                if(ele.classList.contains('clint') || ele.classList.contains('all-users') || ele.classList.contains('two-users')) 
                    ele.classList.remove('hidden');
            })
    
    } else {
    
        // then no user
        links.forEach((ele)=>{
            if(ele.classList.contains('no-user')) 
                ele.classList.remove('hidden');
        });
    
    }

}

wrapperPopup();
checkTypeUser('no-user');
let admins = ['ahmadsd777777@gmail.com'];
let clints = ['ahmadsd88888@gmail.com'];
let lawyers = ['ahmadsd77777@gmail.com'];


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // check valid 
        let validE = false;
        let validP = false;
        
        // check email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errorEmail = document.querySelector('.login .error.email');
        const errorPass = document.querySelector('.login .error.password');
        if(!emailRegex.test(email)){
            errorEmail.classList.remove('hidden');
        }else if(!errorEmail.classList.contains('hidden')){
            errorEmail.classList.add('hidden');
            validE = true;
        }else {
            validE = true;
        }

        // check password
        if(password.length < 8){
            errorPass.classList.remove('hidden');
        }else if(!errorPass.classList.contains("hidden")){
            errorPass.classList.add('hidden');
            validP = true;
        }else {
            validP = true;
        }
        // reset form fields
        if(validE && validP){
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.remove('active-popup');
            checkTypeUser(email);
        }
        


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

         // check valid 
         let validE = false;
         let validP = false;
         let validM = false;
         
         // check email
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         const errorEmail = document.querySelector('.register .error.email');
         const errorPass = document.querySelector('.register .error.password');
         const errorMobile = document.querySelector('.register .error.mobile');
         if(!emailRegex.test(email)){
             errorEmail.classList.remove('hidden');
         }else if(!errorEmail.classList.contains('hidden')){
             errorEmail.classList.add('hidden');
             validE = true;
         }else {
             validE = true;
         }
 
        //  check password
         if(password.length < 8){
             errorPass.classList.remove('hidden');
         }else if(!errorPass.classList.contains("hidden")){
             errorPass.classList.add('hidden');
             validP = true;
         }else {
             validP = true;
         }

        let checkNumber = /^01\d{9}$/;
        if(!checkNumber.test(mobile)) {
            errorMobile.classList.remove('hidden');
        }else if(!errorMobile.classList.contains('hidden')) {
            errorMobile.classList.add('hidden');
            validM = true;
        }else validM = true;

        console.log('Registration:', username, email, mobile, password, address, role);
        // reset form fields
        if(validE && validP && validM){
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.remove('active-popup');
        }
    });
});

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








