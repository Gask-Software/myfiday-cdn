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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);