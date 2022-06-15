import {
    auth,
} from "./utils.js";

const signOutButton = document.querySelector('#menuSignOutButton');

const signout = () => {
    console.log("HELLO LOGOUT PLEASE");
    auth.signOut();
    window.location.replace('./');
}

signOutButton.addEventListener('click', signout);