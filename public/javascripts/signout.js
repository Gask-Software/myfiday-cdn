import {
    auth,
} from "./utils.js";

const signOutButton = document.querySelector('#menuSignOutButton');

console.log("IS THIS EVEN LOADING?");

const signout = () => {
    console.log("HELLO LOGOUT PLEASE");
    auth.signOut();
    window.location.replace('./');
}

if (signOutButton) {
    signOutButton.addEventListener('click', signout);
} else {
    console.log("DEAD KO");
}