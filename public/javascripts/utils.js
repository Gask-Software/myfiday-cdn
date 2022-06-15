// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

export var privatePages = [
    '/dashboard'
];

export var publicPages = [
    '/sign-up',
    '/sign-in'
];

const firebaseConfig = {
    apiKey: "AIzaSyAnarqP4ZUaClJRaNJmt2baTtoaDsiXptQ",
    authDomain: "myfiday.firebaseapp.com",
    projectId: "myfiday",
    storageBucket: "myfiday.appspot.com",
    messagingSenderId: "1043850782170",
    appId: "1:1043850782170:web:e1d35a7186b7764a82cce3",
    measurementId: "G-BLTMZFV1YY"
};

const preloader = document.querySelector('#loader');

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

auth.onAuthStateChanged(user => {
    var currentPath = window.location.pathname;
    if (user) {
        console.log("User is logged in");
        // User is signed in.
        if (publicPages.includes(currentPath)) {
            window.location.replace('./dashboard');
        } else {
            console.log('User is logged in!');
            console.log('Email: ' + user.email);
            console.log('UID: ' + user.uid);
            // signupLink.style.display = 'none';
            // loginLink.style.display = 'none';
            console.log("PRELAODER LOGGED IN");
            preloader.style.display = 'none';
        }
    } else {
        console.log("User is logged out");
        // User is signed out.
        if (privatePages.includes(currentPath)) {
            window.location.replace('./');
        } else {
            console.log('No user is logged in');
            // privateLink.style.display = 'none';
            // logoutLink.style.display = 'none';
            // console.log("PRELAODER");
            // preloader.style.display = 'none';
        }
    }
});