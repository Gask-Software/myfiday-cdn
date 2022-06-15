import {
    auth
} from "./utils.js";
import {
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";


const signInButton = document.querySelector('#signInButton');
const signOutButton = document.querySelector('#menuSignOutButton');
const userName = document.querySelector('#userName');
const userProfilePic = document.querySelector('#userProfilePic');
const loader = document.querySelector('#loader');

auth.onAuthStateChanged(user => {
    var currentPath = window.location.pathname;
    if (user) {
        // User is signed in.
        if (publicPages.includes(currentPath)) {
            window.location.replace('/dashboard');
        } else {
            console.log('User is logged in!');
            console.log('Email: ' + user.email);
            console.log('UID: ' + user.uid);
            signupLink.style.display = 'none';
            loginLink.style.display = 'none';
            loadingScreen.style.display = 'none';
        }
    } else {
        // User is signed out.
        if (privatePages.includes(currentPath)) {
            window.location.replace('/');
        } else {
            console.log('No user is logged in');
            privateLink.style.display = 'none';
            logoutLink.style.display = 'none';
            loadingScreen.style.display = 'none';
        }
    }
});

//  SignUp and Signout Fuctions
const signout = () => {
    auth.signOut();
}


const signup = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);

            window.location.replace('./dashboard');
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });



};

//  Add event listeners to buttons
signInButton.addEventListener('click', signup);