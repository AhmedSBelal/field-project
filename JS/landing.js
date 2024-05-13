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
    links.forEach((ele) => {
        ele.classList.add('hidden');
    });
    if (currentUser == 'ahmadsd77777@gmail.com') {
        return "lawyer";
    } else if (currentUser == 'ahmadsd88888@gmail.com') {
         return "client";
    } else {
        return "noUser";
    }

}

let currentUser = {
    userName: "",
    userType: "noUser", 
};
function UpdateUser(user) {
    currentUser = user
}


// window.localStorage.clear();

// put current user in local storage 
if(window.localStorage['currentUser']){ 
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser);
}

updateNav(currentUser.userType);
    
wrapperPopup();

let clints = ['ahmadsd88888@gmail.com'];
let lawyers = ['ahmadsd77777@gmail.com'];

////////////////// form login&singup
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const logout = document.querySelector('.sub-menu .links .logout');
    // login
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
        if (!emailRegex.test(email)) {
            errorEmail.classList.remove('hidden');
        } else if (!errorEmail.classList.contains('hidden')) {
            errorEmail.classList.add('hidden');
            validE = true;
        } else {
            validE = true;
        }

        // check password
        if (password.length < 8) {
            errorPass.classList.remove('hidden');
        } else if (!errorPass.classList.contains("hidden")) {
            errorPass.classList.add('hidden');
            validP = true;
        } else {
            validP = true;
        }
        // reset form fields
        if (validE && validP) {
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.remove('active-popup');
            document.querySelector('.form-box.login form').reset();

            // sotre data in curretnUser
            currentUser.userName = email;
            currentUser.userType = checkTypeUser(email);
            // use currentUser to stor in local storage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateNav(currentUser.userType);
        }

    });

    // register
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
        if (!emailRegex.test(email)) {
            errorEmail.classList.remove('hidden');
        } else if (!errorEmail.classList.contains('hidden')) {
            errorEmail.classList.add('hidden');
            validE = true;
        } else {
            validE = true;
        }

        //  check password
        if (password.length < 8) {
            errorPass.classList.remove('hidden');
        } else if (!errorPass.classList.contains("hidden")) {
            errorPass.classList.add('hidden');
            validP = true;
        } else {
            validP = true;
        }

        let checkNumber = /^01\d{9}$/;
        if (!checkNumber.test(mobile)) {
            errorMobile.classList.remove('hidden');
        } else if (!errorMobile.classList.contains('hidden')) {
            errorMobile.classList.add('hidden');
            validM = true;
        } else validM = true;

        // console.log('Registration:', username, email, mobile, password, address, role);
        // reset form fields
        if (validE && validP && validM) {
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.remove('active-popup');
            document.querySelector('.form-box.register form').reset();
        }
    });

    // logout
    logout.addEventListener('click', (e)=>{
        const subMenu = document.querySelector('nav .sub-menu-wrap');
        subMenu.classList.add('hidden');
        currentUser.userName = "";
        currentUser.userType = 'noUser';
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateNav(currentUser.userType);
    });

});
///////// update navbar 

function updateNav(userType) {

    const btnPopup = document.querySelector('.btnLogin-popup');
    const profile = document.querySelector('nav .profile');
    let links = document.querySelectorAll('nav ul li');
    const ul = document.querySelector("nav ul");

    links.forEach((ele) => {  // hidden all 
        ele.classList.add('hidden');
    });

    if(userType != 'noUser'){   // user
        btnPopup.classList.add('hidden');
        profile.classList.remove('hidden');
        if (userType == 'lawyer') {
            // then lawyer
            links.forEach((ele) => {
                if (ele.classList.contains('lawyer') || ele.classList.contains('all-users'))
                    ele.classList.remove('hidden');
            });
        } else { 
            // then client
            links.forEach((ele) => {
                if (ele.classList.contains('client') || ele.classList.contains('all-users'))
                    ele.classList.remove('hidden');
            });
        }    
    }else { //  no user
        btnPopup.classList.remove('hidden');
        profile.classList.add('hidden');
        // then no user
        links.forEach((ele) => {
            if (ele.classList.contains('no-user'))
                ele.classList.remove('hidden');
        });
    }

    
    // check user but if small screen
    if(window.innerWidth <= 800){
        if(profile.classList.contains('hidden')) {
            ul.classList.remove('mnScreen-ul-profile');
            ul.classList.add('mnScreen-ul');
        } else {
            ul.classList.add('mnScreen-ul-profile');
            ul.classList.remove('mnScreen-ul');
        }
    }
    


}

////////////////////////////////////////////////////


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


//////////////////////// to handle screen
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
const toggleMenu = document.querySelector(".toggle-menu");
const li = Array.from(document.querySelectorAll("nav ul li")); // array

if (screenWidth <= 800) {
    updateScreenSize();
}

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
    if(currentUser.userType != "noUser"){
        ul.classList.add('mnScreen-ul-profile');
    }else
        ul.classList.add('mnScreen-ul');
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
/////////////////////////////////////////////////////////