import {
    auth,
    publicPages,
    privatePages
} from "./utils.js";
import {
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";


const signInButton = document.querySelector('#signInButton');
const signOutButton = document.querySelector('#menuSignOutButton');
const userName = document.querySelector('#userName');
const userProfilePic = document.querySelector('#userProfilePic');
const loader = document.querySelector('#loader');

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
if (signInButton) {
    signInButton.addEventListener('click', signup);
}